import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { renderTweets } from '../components/Tweet/utils'

const Search = () => {

    const [userSearch, setUserSearch] = useState('');
    const [tweets, setTweets] = useState([]);
    const [userHasSearched, setUserHasSearched] = useState(false);

    const baseURL = '/api/tweets/'

    const getTweets = async (userSearch) => {
      
        let path = baseURL;
      
        userSearch.startsWith('@') 
        ? path = baseURL+'handle_search/'+userSearch
        : path = baseURL+'keyword_search/'+userSearch
  
        try {
            const resp = await Axios.get(path);
            const tweetResults = resp.data.statuses;
            setTweets(tweetResults)
            setUserHasSearched(true)
        }
        catch(error) {
            console.log(error)
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getTweets(userSearch);
    };

    const renderSearchResults = () => {
        if (tweets.length === 0 && userHasSearched == true) {
            return (
                <div className="alert alert-info shadow-lg mt-4" role="alert">
                No recent tweets match your search!
                </div>
            )
        }
        return renderTweets(tweets)
    }

    return (
        <div className='container search-content-container'> 
            <div className='col-6'>
                <div className='container row justify-content-md-center search-container mt-5 mb-2'>
                    <div className='card shadow-lg bg-light mt-2 mb-2'>
                        <div className='card-body'>
                            <div className='card-text'>
                                <h3 className='card-title search-card-title mb-2'>
                                    Search
                                </h3>
                                <p>
                                    Search for ten recent tweets from any Twitter user by <span className='handle'>@handle </span>
                                    or from all users by key word or phrase.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type='text'
                                    placeholder='e.g. "@levarburton" by handle or "LeVar Burton" by keyword...'
                                    className='form-control input-lg mb-3'
                                    onChange={(e) => setUserSearch(e.target.value)}
                                    value={userSearch}
                                    required
                                >
                                </input>
                                <button className='btn form-control' type='submit'>
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className ='container row justify-content-md-center results-container mb-2'>
                    {renderSearchResults()}
                </div>
            </div>
        </div> 
    );
}
 
export default Search;