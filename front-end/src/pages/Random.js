import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UserDescription from '../components/UserDescription/UserDescription'
import { renderTweets } from '../components/Tweet/utils'

const FAVORITE_USERS = [
    {
        name: 'LeVar Burton',
        handle: '@levarburton',
        user_id: 18396070
    },
    {
        name: 'Philip Pullman',
        handle: '@philippullman',
        user_id: 2176527421
    },
    {
        name: 'Seattle Sounders FC',
        handle: '@soundersfc',
        user_id: 17224076
    },
    {
        name: 'Andrei Neagoie',
        handle: '@andreineagoie',
        user_id: 224115510
    },
    {
        name: 'Jon Stewart',
        handle: '@jonstewart',
        user_id: 1354898820400877571
    }
]

const getRandomArrayItem = array => array[Math.floor(Math.random() * array.length)]

const Random = () => {

    const [randomTweet, setRandomTweet] = useState([])
    const [userInfo, setUserInfo] = useState({})
    const [userHasClicked, setUserHasClicked] = useState(false)
    const [apiError, setApiError] = useState("")

    const getRandomTweet = async () => {
        setApiError("");
        let path = `/api/tweets/random/${getRandomArrayItem(FAVORITE_USERS).user_id}`
        let encodedPath = encodeURIComponent(path)
        try {
            const resp = await Axios.get(encodedPath);
            
            if (resp.data.status === 429) {
                setApiError("Too many requests - please try again in 15 minutes.");
                setUserHasClicked(true);
                return;
            }

            const tweetResults = resp.data && resp.data.data 
                ? resp.data.data
                : [];
            setUserHasClicked(true);

            if (tweetResults.length > 0) {
                const randomTweetResult = getRandomArrayItem(tweetResults);
                setRandomTweet([randomTweetResult]);
            } else {
                setRandomTweet([]);
            }
        }
        catch(error) {
            setApiError("An unexpected error occurred - please try again.")
        }  
    }

    useEffect(() => {
        console.log(randomTweet)
        if (randomTweet[0]) {
            console.log(randomTweet[0].author_id);
        }
    }, [randomTweet])

    const renderRandomTweet = () => {
        if (apiError) {
            return (
                <div className='alert alert-danger shadow-lg mt-4' role='alert'>
                    {apiError}
                </div>
            )
        }
        if (randomTweet.length === 0 && userHasClicked === true) {
            return (
                <div className='alert alert-info shadow-lg mt-4' role='alert'>
                    This user hasn't tweeted recently - try again soon!
                </div>
            )
        }
        return renderTweets(randomTweet)
    }

    return (
        
        <div className='container random-content-container'>
            <div className='col-6'>
                <div className='container row justify-content-md-center random-container mt-5 mb-2'>
                    <div className='card shadow-lg bg-light mt-2 mb-2'>
                        <div className='card-body random-card-body'>
                            <div className='card-text'>
                                <h3 className='card-title random-card-title mb-2'>
                                    Random Tweet
                                </h3>
                                <p className='mb-2'>
                                    Get a random recent tweet frome one of these five great Twitter users:
                                </p>
                                <h6 className='mt-3 mb-4'>
                                    LeVar Burton <span className='divider'> | </span>
                                    Philip Pullman <span className='divider'> | </span>
                                    Seattle Sounders FC <span className='divider'> | </span>
                                    Andrei Neagoie <span className='divider'> | </span>
                                    Jon Stewart
                                </h6>
                            </div>
                            <button className='btn form-control' onClick={getRandomTweet}>
                                Show me a random tweet!
                            </button>
                        </div>
                    </div>
                </div>
                <div className='container row d-flex justify-content-md-center '>
                    {renderRandomTweet()}
                </div>
                <div className='container row d-flex justify-content-md-center '>
                {randomTweet.length > 0 && randomTweet[0]?.author_id ? (
                    <UserDescription author_id={randomTweet[0].author_id} />
                    ) : null}
                </div>
            </div>    
        </div>
    );
}
 
export default Random;
