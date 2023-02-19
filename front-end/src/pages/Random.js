import React, { useState } from 'react'
import Axios from 'axios'
import UserDescription from '../components/UserDescription/UserDescription'
import { renderTweets } from '../components/Tweet/utils'

const FAVORITE_USERS = [
    '@levarburton',
    '@philippullman',
    '@soundersfc',
    '@dog_feelings',
    '@hofswitzerland'
]

const getRandomArrayItem = (array) => {
    return array.length > 0 
    ? [Math.floor(Math.random() * array.length)]
    : [];
}

const Random = () => {

    const [randomTweet, setRandomTweet] = useState([])
    const [userHasClicked, setUserHasClicked] = useState(false)

    const getRandomTweet = async () => {
        let path = `/api/tweets/random/${getRandomArrayItem(FAVORITE_USERS)}`
        try {
            const resp = await Axios.get(path);
            const tweetResults = resp.data.statuses;
            const randomTweetResult = getRandomArrayItem(tweetResults)
            setRandomTweet([randomTweetResult])
            setUserHasClicked(true)
        }
        catch(error) {
            console.log(error)
        }
    }

    const renderRandomTweet = () => {
        if (randomTweet.length === 0 && userHasClicked == true) {
            return (
                <div className="alert alert-info shadow-lg mt-4" role="alert">
                This user hasn't tweeted recently - try again soon!
                </div>
            )
        }
        return renderTweets(randomTweet)
    }

    const renderUserDescription = () => {
        if (randomTweet.length !== 0) {
            return randomTweet.map((tweet, i) => (
                <UserDescription
                key = {i}
                name={tweet.user.name}
                description={tweet.user.description}
                />
            ));
        }
        return <></>    
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
                                    Thoughts of Dog <span className='divider'> | </span>
                                    House of Switzerland
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
                    {renderUserDescription(randomTweet)}
                </div>
            </div>    
        </div>
    );
}
 
export default Random;
