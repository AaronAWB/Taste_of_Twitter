import React from 'react';

const Search_Card = () => {
    return(
        <div className='col-6'>
            <div className='container row justify-content-md-center search-container mt-5 mb-2'>
                <div className='card shadow-sm bg-light mt-2 mb-2'>
                    <div className='card-body'>
                         <h3 className='card-title mb-2'>
                            Search
                        </h3>
                        <input
                            type='text'
                            placeholder='Search by Name or Keyword...'
                            className='form-control input-lg mb-3'
                        >
                        </input>
                        <button className='btn btn-info form-control'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search_Card;