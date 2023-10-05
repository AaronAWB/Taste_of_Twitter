import { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDate } from './utils';
import Retweet_Icon from '../../assets/icons/retweet.png';
import Like_Icon from '../../assets/icons/like.png'
import './Tweet.css'

const Tweet = ({tweet}) => {

    useEffect(() => {
        getUserInfo(tweet)
    }, [tweet])

    const [user, setUser] = useState({})

    const getUserInfo = async (tweet) => {
        const author = tweet.author_id
        const res = await axios.get(`/api/tweets/user_info/${author}`)
        setUser(res.data.data)
    }
    
    const renderTweetImage = (tweet) => {
        if (tweet.media_url) {
          return (
          <img 
            src={tweet.media_url}
            alt='Tweet Image'
            className='tweet-image rounded'
            />
          );
        }
        return <></>;
      }
    
    return(
        <div className='card tweet-card shadow-lg mb-2 mt-2'>
            <div className ='card-body tweet-body'>
                
                    <div className='profile-image'>
                        <img 
                            src={user.profile_image_url}
                            alt='profile picture'
                            className='rounded-circle'
                            >
                        </img>
                    </div>
                    <div className='tweet-content'>
                        <h5 className='card-title mb-3'>
                            {user.name} 
                            <span className='handle text-muted'> @{user.username} </span> 
                            <span className='date text-muted'>{formatDate(tweet.created_at)} </span>
                        </h5>
                        <p className='mb-3'>
                            {tweet.text}
                        </p>
                        <div className='mb-3'>
                            {renderTweetImage(tweet)}
                        </div>
                        <div className='d-flex'>
                            <img
                                src={Retweet_Icon}
                                alt='retweets'
                                width='22px'
                                height='22px'
                            >
                            </img>
                            <p className='retweets-count'>
                                <span className='retweets-text'>{tweet.public_metrics.retweet_count}</span>
                            </p>
                            <img
                                src={Like_Icon}
                                alt='likes'
                                width='22px'
                                height='22px'
                            >
                            </img>
                            <p className='favorites-count'>
                            <span className='favorites-text'>{tweet.public_metrics.like_count}</span>
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
      
}

export default Tweet;
