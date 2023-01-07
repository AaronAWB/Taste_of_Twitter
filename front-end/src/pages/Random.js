import React from 'react'
import Axios from 'axios'

import Headshot from '../components/Headshot/Headshot';
import Burton from '../assets/images/LeVar_Burton.png';
import Ward from '../assets/images/Alie_Ward.png';
import Tweet from '../components/Tweet/Tweet';

const favoriteProfiles = [
    '@levarburton',
    '@alieward',
    '@SoundersFC',
    '@Ericidle',
    '@SenatorCantwell',
]

const getProfilePicture = async (profile) => {
    const profilePath = `http://127.0.0.1:5000/api/tweets/random/${profile}`
    const response = await Axios.get(profilePath)
    const profileData = response.data.statuses;
    const profilePicture = profileData.user.profile_image_url;
    return profilePicture
    }

const getProfileDescription = async (profile) => {
    const profilePath = `http://127.0.0.1:5000/api/tweets/random/${profile}`
    const response = await Axios.get(profilePath)
    const profileData = response.data.statuses;
    const profileDescription = profileData.user.description;
    console.log(profileDescription)
    }

const Random = () => {

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
                            Description={getProfileDescription('@alieward')}
                            Alt='Alie Ward'
                        />
                    </div>
                    <div className='container mt-5 col'>
                        <Headshot
                            Name='Seattle Sounders FC' 
                            Source={getProfilePicture('@SoundersFC')}
                            Description={getProfileDescription('@SoundersFC')}
                            Alt='LeVar Burton'
                        />
                    </div>
                    <div className='container mt-5 col'>
                        <Headshot
                            Name='Eric Idle' 
                            Source={getProfilePicture('@Ericidle')}
                            Description={getProfileDescription('@Ericidle')}
                            Alt='Eric Idle'
                        />
                    </div>
                    <div className='container mt-5 col'>
                        <Headshot
                            Name='Senator Maria Cantell'
                            Source={getProfilePicture('@Senatorcantwell')}
                            Description={getProfileDescription('@Senatorcantwell')}
                            Alt='Senator Cantwell'
                        />
                    </div>
                </div>
            </div>
                    <div className='container d-flex align-items-center'>
                        <Tweet />
                    </div>
                    
        </div>
    );
}
 
export default Random;
