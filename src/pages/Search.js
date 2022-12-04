
import '../styles/Search.css'
import Tweet from '../components/Tweet';

const Search = () => {
    return (  
        <div className='container'>
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
                    <button className='btn btn-info form-control'>
                        Search
                    </button>
                </div>
            </div>
            <div>
                <Tweet />
            </div>
        </div>
    );
}
 
export default Search;