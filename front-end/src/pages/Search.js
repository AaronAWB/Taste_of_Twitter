
import '../styles/Search.css'
import Tweet from '../components/Tweet';
import Axios from 'axios'

const makeSearchRequest = (path) => {
    const searchResults = Axios.get(path);
    console.log(searchResults)
    return searchResults
}

const Search = () => {``
    return (
        <div className='container content-container'> 
            <div className='container search-container'>
                <div className='card shadow-sm'>
                    <div className='card-body'>
                        <h3 className='card-title mb-3'>
                            Search
                        </h3>
                        <input
                            type='text'
                            placeholder='Search by Name or Keyword...'
                            className='form-control input-lg mb-3'
                        >
                        </input>
                        <button className='btn btn-info form-control' onClick={() => {makeSearchRequest('http://127.0.01.:5000/api/tweets/search')}}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className ='container results-container'>
                <Tweet />
            </div>
        </div> 
    );
}
 
export default Search;