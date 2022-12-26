import '../styles/Home.css'

const Home = () => {
    return (  
        <div className='container content-container'>
            <div className='col'>
                <div className='container row justify-content-md-center search-container'>
                    <div className='card shadow-sm bg-light mt-2 mb-2'>
                            <div className='card-body'>
                                <h3 className='card-title mb-2'>
                                    Search by Handle or Keyword
                                </h3>
                            </div>
                    </div>
                </div>
                <div className='container row justify-content-md-center random-container'>
                    <div className='card shadow-sm bg-light mt-2 mb-2'>
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