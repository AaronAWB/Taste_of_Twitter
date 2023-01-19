import Retweet_Icon from '../../assets/icons/retweet.png';
import Like_Icon from '../../assets/icons/like.png'
import './Tweet.css'

const Tweet = ({name, handle, text, image, retweets, favorites}) => {

    return(
        <div className='card shadow-sm mb-2 mt-2'>
            <div className ='card-body'>
                <h5 className='card-title mb-3'>
                    {name} <span className='handle text-muted'>@{handle} </span>
                </h5>
                <p className='mb-3'>
                    {text}
                </p>
                <div className='mb-3'>
                    {image}
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
                        {retweets}
                    </p>
                    <img
                        src={Like_Icon}
                        alt='likes'
                        width='22px'
                        height='22px'
                    >
                    </img>
                    <p className='favorites-count'>
                        {favorites}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tweet;