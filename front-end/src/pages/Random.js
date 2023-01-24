import React, {useState} from 'react'
import Axios from 'axios'
import UserDescription from '../components/UserDescription/UserDescription'

const Random = ({renderTweets}) => {

    const [randomTweet, setRandomTweet] = useState([])
    
    const getRandomTweet = async () => {
        const profile = getRandomUser();
        let path = `http://127.0.0.1:5000/api/tweets/random/${profile}`
        try {
            const response = await Axios.get(path);
            const tweetResults = response.data.statuses;
            console.log(tweetResults)
            const randomTweetResult = tweetResults[getRandomNumber(tweetResults.length)]
            setRandomTweet([randomTweetResult])
            console.log(randomTweet)
        }
        catch(error) {
            console.log(error)
        }
    }

    const getRandomUser = () => {
        const randomUser = favoriteUsers[getRandomNumber(5)];
        console.log(randomUser)
        return randomUser
    }

    const getRandomNumber = (max) => {
        return Math.floor(Math.random()*max)
    }

    const renderUserDescription = () => {
        return randomTweet.map((tweet, i) => (
            <UserDescription
            key = {i}
            name={tweet.user.name}
            description={tweet.user.description}
            />
        ));    
      }

    const favoriteUsers = [
        '@levarburton',
        '@philippullman',
        '@soundersfc',
        '@dog_feelings',
        '@nasa'
    ]

    return (
        
        <div className='container random-content-container'>
            <div className='col-6'>
                <div className='container row justify-content-md-center random-container mt-5 mb-2'>
                    <div className='card shadow-lg bg-light mt-2 mb-2'>
                        <div className='card-body'>
                            <h3 className='card-title mb-2'>
                                Random
                            </h3>
                            <p className='mb-2'>
                                Get a random recent tweet frome one of these five users:
                            </p>
                            <h6 className='mt-3 mb-4'>
                                LevarBurton <span className='text-info'> | </span>
                                Philip Pullman <span className='text-info'> | </span>
                                Seattle Sounders FC <span className='text-info'> | </span>
                                Thoughts of Dog <span className='text-info'> | </span>
                                NASA 
                            </h6>
                            <button className='btn btn-info form-control' onClick={getRandomTweet}>
                                Get a random Tweet!
                            </button>
                        </div>
                    </div>
                </div>
                <div className='container row d-flex justify-content-md-center '>
                    {renderTweets(randomTweet)}
                </div>
                <div className='container row d-flex justify-content-md-center '>
                    {renderUserDescription(randomTweet)}
                </div>
            </div>    
        </div>
    );
}
 
export default Random;
