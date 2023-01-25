import { Link } from 'react-router-dom';
import './Pages.css'
import Random_Image from '../assets/images/Twitter_1.jpg';

const Home = () => {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card shadow-lg bg-light mt-2 mb-2'>
                        <div className='card-body'>
                                <h1 className='card-title mb-2'>
                                    My Twitter Showcase App
                                </h1>
                                <p>
                                    This is an App that allows you to do two things:
                                    1.  Search by Twitter Handle or Keyword to display 10 tweets; or
                                    2.  Search for a random recent tweet from one of 5 pre-selected accounts.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='container search-container'>
                        <Link to={'/search'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className='card homepage-card shadow-lg bg-light mt-2 mb-2'>
                                    <div className='card-body button-card'>
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
                        </Link>
                    </div>
                </div>
                <div className='col-6'>
                    <Link to={'/random'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className='card homepage-card shadow-lg bg-light mt-2 mb-2'>
                                <div className='card-body button-card'>
                                    <div className='card-image-container'>
                                        <img 
                                            src={Random_Image}
                                            alt='Random tweet image'
                                            className='img-thumbnail rounded shadow-sm card-image'
                                            width='200px'
                                            height='200px'
                                        ></img>
                                    </div>
                                    <div className='card-text-container'>
                                        <h3 className='card-title mb-2'>
                                            Random
                                        </h3>
                                        <p>
                                            Get a random tweet from one of 5 users!
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Home;