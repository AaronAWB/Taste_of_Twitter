import React from 'react'
import { useState } from 'react'

const Search = ({getTweets, renderTweets}) => {

    const [userSearch, setUserSearch] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getTweets(userSearch);
        renderTweets();
    };

    return (
        <div className='container search-content-container'> 
            <div className='col-6'>
                <div className='container row justify-content-md-center search-container mt-5 mb-2'>
                    <div className='card shadow-sm bg-light mt-2 mb-2'>
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
                    {renderTweets()}
                </div>
            </div>
        </div> 
    );
}
 
export default Search;