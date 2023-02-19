import Tweet from './Tweet';

export const renderTweets = (tweetData) => {
    return tweetData.map((tweet, i) => (
        <Tweet
        key = {i}
        profile_picture={tweet.user.profile_image_url_https}
        name={tweet.user.name}
        handle={tweet.user.screen_name}  
        date={modifyDate(tweet)}       
        text={tweet.full_text} 
        image={renderTweetImage(tweet)}
        retweets={tweet.retweet_count}
        favorites={tweet.favorite_count}
        />
    ));    
  }

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

  const modifyDate = (tweet) => {
    const date = tweet.created_at
    const monthAndDay= date.slice(4,10)
    const year = date.slice(25,30)
    return `${monthAndDay}, ${year}`
  }