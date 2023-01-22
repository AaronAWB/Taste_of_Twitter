import React, {useState, useEffect} from 'react'
import Axios from 'axios'

import Headshot from '../components/Headshot/Headshot';

const Random = ({renderTweets, getProfileData, profiles}) => {

    const [randomTweet, setRandomTweet] = useState([])

    const getRandomTweet = async () => {
        const profile = getRandomProfile();
        let path = `http://127.0.0.1:5000/api/tweets/random/${profile}`
        try {
            const response = await Axios.get(path);
            const tweetResults = response.data.statuses;
            const randomTweetResult = tweetResults[getRandomNumber(tweetResults.length)]
            setRandomTweet([randomTweetResult])
        }
        catch(error) {
            console.log(error)
        }
    }

    const getRandomProfile = () => {
        const randomProfile = favoriteProfiles[getRandomNumber(5)].handle;
        return randomProfile
    }

    const getRandomNumber = (max) => {
        return Math.floor(Math.random()*max)
    }



    // useEffect (() => {
    //     getProfileData();
    // }, [])

    // const getProfileData = () => {

    //     return favoriteProfiles.map((favoriteProfile) => {
    //         const screenName = favoriteProfile.screen_name;
    //         const apiPath = `http://127.0.0.1:5000/api/profiles/${screenName}`
    //         const response = Axios.get(apiPath);
    //         const profileData = response;
    //         console.log(profileData)
    //         setProfiles([...profiles, profileData])
    //     })
    //   }

    const favoriteProfiles = [
        {
            'name': 'Levar Burton',
            'handle': '@levarburton',
            'screen_name': 'levarburton'
        },
        {
            'name': 'Alie Ward',
            'handle': '@alieward',
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
        
        //     {/* <div className='container d-flex align-items-center'>
        //         <div className='row'>
        //             {renderFavoriteProfiles()}
        //         </div>
        //     </div> */}
        <div className='container random-content-container'>
            <div className='col-6'>
                <div className='container row justify-content-md-center random-container mt-5 mb-2'>
                    <div className='card shadow-sm bg-light mt-2 mb-2'>
                        <div className='card-body'>
                            <h3 className='card-title mb-2'>
                                Random
                            </h3>
                            <button className='btn btn-info form-control' onClick={getRandomTweet}>
                                Display Random Tweet
                            </button>
                        </div>
                    </div>
                </div>
                <div className='container row d-flex justify-content-md-center '>
                    {renderTweets(randomTweet)}
                </div> 
            </div>    
        </div>
    );
}
 
export default Random;
