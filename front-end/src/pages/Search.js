import React from 'react'
import { useState } from 'react'
import '../styles/Search.css'

const Search = ({handleSearch, renderTweets}) => {

    const [userSearchInput, setUserSearchInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(userSearchInput);
        renderTweets();
        console.log('Clicked!')
    };

    return (
        <div className='container content-container'> 
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
                                    onChange={(e) => setUserSearchInput(e.target.value)}
                                    value={userSearchInput}
                                    required
                                >
                                </input>
                            </form>
                            <button className='btn btn-info form-control' type='submit'>
                                Search
                            </button>
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