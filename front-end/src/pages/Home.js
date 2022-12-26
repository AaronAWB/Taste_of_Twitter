import '../styles/Home.css'

const Home = () => {
    return (  
        <div className='container content-container'>
            <div className='col'>
                <div className='container row justify-content-md-center search-container'>
                    <div className='card homepage-card shadow-sm bg-light mt-2 mb-2'>
                            <div className='card-body'>
                                <h3 className='card-title mb-2'>
                                    Search by Handle or Keyword
                                </h3>
                                <p>
                                    Search all of Twitter by Handle or Keyword! 
                                    The ten most recent Tweets matching your search will be displayed -
                                    No need to use Twitter or even have a Twitter account!
                                </p>
                            </div>
                    </div>
                </div>
                <div className='container row justify-content-md-center random-container'>
                    <div className='card homepage-card shadow-sm bg-light mt-2 mb-2'>
                            <div className='card-body'>
                                <h3 className='card-title mb-2'>
                                    Random Search
                                </h3>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;