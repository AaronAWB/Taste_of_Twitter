import { Link } from 'react-router-dom';
import './Pages.css'
import Random_Image from '../assets/images/Twitter_1.jpg';
import Search_Image from '../assets/images/Search.jpg'
import Header_Image from '../assets/images/Orange.jpg'

const Home = () => {
    return (  
        <div className='container home-page-container'>

                    <div className='header-container'>
                        <div className='card header-card shadow-lg mt-2 mb-2'>
                            <div className='header-image-container'>
                                <img 
                                    src={Header_Image} 
                                    className="header-image" 
                                    alt="image of an orange">
                                </img>
                            </div>
                            <div className='card-body card-img-overlay header-card-body'>
                                <div className='main-header-container'>
                                    <h1 className='card-title main-header mb-2'>
                                        Taste of Twitter
                                    </h1>
                                </div>
                                <div className='header-text-container'>
                                    <p className='header-text'> 
                                        Enjoy Twitter in small doses.
                                        Search for recent tweets by user or keyword,
                                        or explore random tweets from five
                                        great pre-selected users. All without ever
                                        logging in to your account.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className='button-card-container'>
                        <Link to={'/search'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className='card button-card shadow-lg mt-2 mb-2'>
                                <div className='button-card-body'>
                                    <div className='card-image-container mt-3'>
                                        <img 
                                            src={Search_Image}
                                            alt='Search image'
                                            className='img-thumbnail rounded-circle shadow-sm card-image'
                                        ></img>
                                    </div>
                                    <div className='card-text-container mt-4'>
                                        <h3 className='card-title mb-2'>
                                            Search
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
            
                        <Link to={'/random'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className='card button-card shadow-lg mt-2 mb-2'>
                                <div className='button-card-body'>
                                    <div className='card-image-container mt-3'>
                                        <img 
                                            src={Random_Image}
                                            alt='Random tweet image'
                                            className='img-thumbnail rounded-circle shadow-sm card-image'
                                        ></img>
                                    </div>
                                    <div className='card-text-container'>
                                        <h3 className='card-title mt-4 mb-2'>
                                            Random
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                        
        </div>
        
    );
}
 
export default Home;