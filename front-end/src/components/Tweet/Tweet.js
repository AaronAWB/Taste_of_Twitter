import Retweet_Icon from '../../assets/icons/retweet.png';
import Like_Icon from '../../assets/icons/like.png'
import './Tweet.css'

const Tweet = ({tweet}) => {

    return(
        <div className='card tweet-card shadow-lg mb-2 mt-2'>
            <div className ='card-body tweet-body'>
                
                    <div className='profile-image'>
                        <img 
                            src={tweet.user.profile_image_url_https}
                            alt='profile picture'
                            className='rounded-circle'
                            >
                        </img>
                    </div>
                    <div className='tweet-content'>
                        <h5 className='card-title mb-3'>
                            {tweet.user.name} 
                            <span className='handle text-muted'> @{tweet.user.screen_name} </span> 
                            <span className='date text-muted'>{renderDate(tweet.created_at)} </span>
                        </h5>
                        <p className='mb-3'>
                            {tweet.full_text}
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
                                <span className='retweets-text'>{tweet.retweet_count}</span>
                            </p>
                            <img
                                src={Like_Icon}
                                alt='likes'
                                width='22px'
                                height='22px'
                            >
                            </img>
                            <p className='favorites-count'>
                            <span className='favorites-text'>{tweet.favorite_count}</span>
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
      
}

export default Tweet;

const renderTweetImage = (tweet) => {
    if (tweet.hasOwnProperty('extended_entities')) {
      return (
      <img 
        src={tweet.extended_entities.media[0].media_url}
        className='tweet-image rounded'
        />
      );
    }
    return <></>;
  }

const renderDate = (date) => {
    const monthAndDay= date.slice(4,10)
    const year = date.slice(25,30)
    return `${monthAndDay}, ${year}`
  }