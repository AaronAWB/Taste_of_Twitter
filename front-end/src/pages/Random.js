import { useState, useEffect } from 'react'
import Axios from 'axios'

import Headshot from '../components/Headshot';
import Burton from '../assets/images/LeVar_Burton.png';
import Ward from '../assets/images/Alie_Ward.png';
import Search_Card from '../components/Search-Card';
import Tweet from '../components/Tweet';

const favoriteProfiles = [
    '@levarburton',
    '@alieward',
    '@SoundersFC',
    '@Ericidle',
    '@SenatorCantwell',
]

const getProfilePicture = async (profile) => {
    const profilePath = `/api/tweets/random/${profile}`
    const response = await Axios.get(profilePath)
    const profileData = response.data.statuses;
    const profilePicture = profileData.user.description;
    return profilePicture
    }

const getProfileDescription = async (profile) => {
    const profilePath = `/api/tweets/random/${profile}`
    const response = await Axios.get(profilePath)
    const profileData = response.data.statuses;
    const profileDescription = profileData.user.description;
    return profileDescription
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

    const [profileDescription, setProfileDescription] = useState([]);


    return (
        <div className='container'>
            <div className='container d-flex align-items-center'>
                <div className='row'>
                    <div className='container mt-5 col'>
                        <Headshot
                            Name='LeVar Burton' 
                            Source={getProfilePicture('@levarburton')}
                            Description={getProfileDescription('@levarburton')}
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
