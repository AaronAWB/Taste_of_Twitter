import '../styles/Home.css'

const Home = () => {
    return (  
        <div className='container content-container'>
            <div className='col'>
                <div className='container row justify-content-md-center search-container'>
                    This is where the search text will be.
                </div>
                <div className='container row justify-content-md-center random-container'>
                    This is where the random text will be.
                </div>
            </div>
        </div>
    );
}
 
export default Home;