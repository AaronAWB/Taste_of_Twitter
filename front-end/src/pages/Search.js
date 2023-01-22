import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const Search = ({renderTweets}) => {

    const [userSearch, setUserSearch] = useState('');
    const [tweets, setTweets] = useState([]);

    const baseURL = 'http://127.0.0.1:5000/api/tweets/'

    const getTweets = async (userSearch) => {
      
        let path = baseURL;
      
        userSearch.startsWith('@') 
        ? path = baseURL+'handle_search/'+userSearch
        : path = baseURL+'keyword_search/'+userSearch
  
        try {
            const response = await Axios.get(path);
            const tweetResults = response.data.statuses;
            setTweets(tweetResults)
            console.log(tweetResults)
        }
        catch(error) {
            console.log(error)
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getTweets(userSearch);
        renderTweets(tweets);
    };

    return (
        <div className='container search-content-container'> 
            <div className='col-6'>
                <div className='container row justify-content-md-center search-container mt-5 mb-2'>
                    <div className='card shadow-lg bg-light mt-2 mb-2'>
                        <div className='card-body'>
                            <h3 className='card-title mb-2'>
                                Search
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type='text'
                                    placeholder='Search by Twitter Handle or Keyword...'
                                    className='form-control input-lg mb-3'
                                    onChange={(e) => setUserSearch(e.target.value)}
                                    value={userSearch}
                                    required
                                >
                                </input>
                                <button className='btn btn-info form-control' type='submit'>
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className ='container row justify-content-md-center results-container mb-2'>
                    {renderTweets(tweets)}
                </div>
            </div>
        </div> 
    );
}
 
export default Search;