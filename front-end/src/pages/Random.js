import { useState, useEffect } from 'react'

import Headshot from '../components/Headshot';
import Burton from '../assets/images/LeVar_Burton.png';
import Ward from '../assets/images/Alie_Ward.png';
import Search_Card from '../components/Search-Card';
import Tweet from '../components/Tweet';

const [profileData, setProfileData] = useState([]);

const favoriteProfiles = [
    '@levarburton',
    '@alieward',
    '@SoundersFC',
    '@Ericidle',
    '@SenatorCantwell',
]

const updateProfileInfo = () => {
    return (
        favoriteProfiles.map((profile, i) => {
            {
                Name: TweetResults,

            }
        })
    )
}

const getProfileInfo = async (profile) => {
    
    const path = `/api/tweets/random/${profile}`

    try {
        const response = await Axios.get(path);
        const tweetResults = response.data.statuses;
    }
    catch(error) {
        console.log(error)
    }
    const updatedProfiles = favoriteProfiles.map((profile) => {
        return(
            {
                name: `${tweetResults.user.name}`,
                handle: `${tweetResults.user.screen_name}`,
                profile_picture: `${tweetResults.user.screen_name}`,
                description: `${tweetResults.user.screen_name}`,
                location: `${tweetResults.user.screen_name}`,

            }
        )
    }); 
  }


const profiles = {
    Levar_Burton: {
        Handle: '@levarburton',
        Profile_Picture: url,
        Description: description,
        Location: place,
    },
    Alie_Ward: {
        Handle: '@alieward',
        Profile_Picture: url,
        Description: description,
        Location: place,
    },
    Sounders: {
        Handle: '@SoundersFC',
        Profile_Picture: url,
        Description: description,
        Location: place,
    },
    Eric_Idle: {
        Handle: '@Ericidle',
        Profile_Picture: url,
        Description: description,
        Location: place,
    },
    Maria_Cantwell: {
        Handle: '@SenatorCantwell',
        Profile_Picture: url,
        Description: description,
        Location: place,
    }
}



const Random = () => {
    return (
        <div className='container'>
            <div className='container d-flex align-items-center'>
                <div className='row'>
                    <div className='container mt-5 col'>
                        <Headshot
                            Name='LeVar Burton' 
                            Source={getProfileInfo('@levarburton')}
                            Alt='LeVar Burton'
                        />
                    </div>
                    <div className='container mt-5 col'>
                        <Headshot 
                            Name='Alie Ward'
                            Source={getProfilePicture('@alieward')}
                            Alt='Alie Ward'
                        />
                    </div>
                    <div className='container mt-5 col'>
                        <Headshot
                            Name='Seattle Sounders FC' 
                            Source={getProfilePicture('@SoundersFC')}
                            Alt='LeVar Burton'
                        />
                    </div>
                    <div className='container mt-5 col'>
                        <Headshot
                            Name='LeVar Burton' 
                            Source={Burton}
                            Alt='LeVar Burton'
                        />
                    </div>
                    <div className='container mt-5 col'>
                        <Headshot
                            Name='LeVar Burton'
                            Source={Burton}
                            Alt='LeVar Burton'
                        />
                    </div>
                </div>
            </div>
                    <div className='container d-flex align-items-center'>
                        <Search_Card />
                    </div>
                    <div className='container d-flex align-items-center'>
                        <Tweet />
                    </div>
                    
        </div>
    );
}
 
export default Random;


// LeVar Burton
// John Cleese
// Andy Sterkowitz
// Alie Ward
// Premier League