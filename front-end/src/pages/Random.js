import React, {useState} from 'react'
import Axios from 'axios'
import UserDescription from '../components/UserDescription/userDescription'

const Random = ({renderTweets}) => {

    const [randomTweet, setRandomTweet] = useState([])
    
    const getRandomTweet = async () => {
        const profile = getRandomProfile();
        let path = `http://127.0.0.1:5000/api/tweets/random/${profile}`
        try {
            const response = await Axios.get(path);
            const tweetResults = response.data.statuses;
            const randomTweetResult = tweetResults[getRandomNumber(tweetResults.length)]
            setRandomTweet([randomTweetResult])
            console.log(randomTweet)
        }
        catch(error) {
            console.log(error)
        }
    }

    const getRandomProfile = () => {
        const randomProfile = favoriteProfiles[getRandomNumber(5)].handle;
        console.log(randomProfile)
        return randomProfile
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

    // const getProfileDescription = async (user) => {
    //     let path = `http://127.0.0.1:5000/api/profiles/${user}`
    //     try {
    //         const response = await Axios.get(path);
    //         const description = response.description
    //         console.log(description)
    //     }
    //     catch(error) {
    //         console.log(error)
    //     }
    //   }

    const favoriteProfiles = [
        {
            'name': 'Levar Burton',
            'handle': '@levarburton',
            'screen_name': 'levarburton'
        },
        {
            'name': 'Philip Pullman',
            'handle': '@philippullman',
            'screen_name': 'alieward'
        },
        {
            'name': 'Seattle Sounders FC',
            'handle': '@SoundersFC',
            'screen_name': 'soundersfc'
        },
        {
            'name': 'Eric Idle',
            'handle': '@Ericidle',
            'screen_name': 'ericidle'
        },
        {
            'name': 'Senator Maria Cantwell',
            'handle': '@SenatorCantwell',
            'screen_name': 'senatorcantwell'
        },
    ]

    // const renderDescription = (user) => {
    //     return (<p>{getProfileDescription(user)}</p>)
    // }
     
   
    
    // const renderFavoriteProfiles = () => {
    //     return profiles.map((profile, i) => {
    //         return(
    //             <div className='container mt-5 col' key={i}>
    //                 <Headshot
    //                     Name={profile.data.name}
    //                     Source={profile.data.profile_image_url_https}
    //                     Description={profile.data.description}
    //                     Alt={profile.username}
    //                     />
    //             </div>
    //         )
    //     })
    // }
    
    return (
        
        <div className='container random-content-container'>
            <div className='col-6'>
                <div className='container row justify-content-md-center random-container mt-5 mb-2'>
                    <div className='card shadow-sm bg-light mt-2 mb-2'>
                        <div className='card-body'>
                            <h3 className='card-title mb-2'>
                                Random
                            </h3>
                            <p className='mb-2'>
                                Get a random recent tweet from one of my five favorite profiles:
                            </p>
                            <h6>
                                LevarBurton
                            </h6>
                            <p>
                                {/* {renderDescription('levarburton')} */}
                            </p>

                            <button className='btn btn-info form-control' onClick={getRandomTweet}>
                                Display Random Tweet
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
