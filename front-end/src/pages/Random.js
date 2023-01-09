import React, {useEffect} from 'react'

import Headshot from '../components/Headshot/Headshot';
import Tweet from '../components/Tweet/Tweet';

const Random = ({favoriteProfiles, getProfileData, profiles}) => {

    useEffect (() => {
        getProfileData();
    }, [])
    
    const renderFavoriteProfiles = () => {
        return profiles.map((profile, i) => {
            return(
                <div className='container mt-5 col' key={i}>
                    <Headshot
                        Name={profile.data[0].name}
                        Source={profile.data[0].profile_image_url_https}
                        Description={profile.data[0].description}
                        Alt={profile.username}
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
