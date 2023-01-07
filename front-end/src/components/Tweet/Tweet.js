import Retweet_Icon from '../../assets/icons/retweet.png';
import Like_Icon from '../../assets/icons/like.png'

const Tweet = ({name, handle, text, image, retweets, likes}) => {

    return(
        <div className='card shadow-sm mb-2 mt-2'>
            <div className ='card-body'>
                <h5 className='card-title mb-3'>
                    {name} <span className='text-muted'>@{handle} </span>
                </h5>
                <p className='mb-3'>
                    {text}
                </p>
                <p>
                    {image}
                </p>
                <div className='d-flex'>
                    <img
                        src={Retweet_Icon}
                        alt='retweets'
                        width='22px'
                        height='22px'
                    >
                    </img>
                    <p>
                        {retweets}
                    </p>
                    <img
                        src={Like_Icon}
                        alt='likes'
                        width='22px'
                        height='22px'
                    >
                    </img>
                    <p>
                        {likes}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tweet;