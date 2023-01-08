import React, {useState, useEffect} from 'react'
import Axios from 'axios'

import Headshot from '../components/Headshot/Headshot';
import Burton from '../assets/images/LeVar_Burton.png';
import Ward from '../assets/images/Alie_Ward.png';
import Tweet from '../components/Tweet/Tweet';

const favoriteProfiles = [
    {
        'name': 'Levar Burton',
        'handle': '@levarburton'
    },
    {
        'name': 'Alie Ward',
        'handle': '@alieward'
    },
    {
        'name': 'Seattle Sounders FC',
        'handle': '@SoundersFC'
    },
    {
        'name': 'Eric Idle',
        'handle': '@Ericidle'
    },
    {
        'name': 'Senator Maria Cantwell',
        'handle': '@SenatorCantwell'
    },
]

const Random = () => {

    useEffect (() => {
        getProfileData();
    }, [])
    
    const [profiles, setProfiles] = useState([]);

    const getProfileData = async () => {

        for (let i = 0; i <= favoriteProfiles.length; i++) {
            let handle = favoriteProfiles[i].handle
            const apiPath = `http://127.0.0.1:5000/api/tweets/random/${handle}`
            const response = await Axios.get(apiPath);
            const profileData = response.data.statuses;
            setProfiles([...profiles, profileData])
        }
    }
    
    const renderFavoriteProfiles = () => {
        return profiles.map((profile, i) => {
            return(
                <div className='container mt-5 col' key={i}>
                    <Headshot
                        Name={profile.user.name}
                        Source={profile.user}
                        Description={profile.user.description}
                        Alt={profile.user.name}
                        />
                </div>
            )
        })
    }
    
    return (
        <div className='container'>
            <div className='container d-flex align-items-center'>
                <div className='row'>
                    {renderFavoriteProfiles()}
                </div>
            </div>
                <div className='container d-flex align-items-center'>
                    <Tweet />
                </div>     
        </div>
    );
}
 
export default Random;
