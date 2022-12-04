
import '../styles/Search.css'

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
            <div className='card shadow-sm'>
                <div className ='card-body'>
                    <h5 className='card-title mb-3'>
                        Name <span className='text-muted'>@twitter-handle </span>
                    </h5>
                    <p className='mb-3'>
                        Here is the text of the tweet. The text of the Tweet may go on for some time. 
                        It can be fairly long. Like a paragraph of text. It shoud all fit here.
                    </p>
                    <p>
                        This is where an image would go if there was one.
                    </p>

                </div>
            </div>
        </div>

    );
}
 
export default Search;