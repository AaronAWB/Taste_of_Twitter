import React, {useState, useEffect} from 'react'
import Axios from 'axios'

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
                        Name={profile.user.name}
                        Source={profile.user.profile_image_url_https}
                        Description={profile.user.description}
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
