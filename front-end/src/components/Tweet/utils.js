import Tweet from './Tweet';

export const renderTweets = (tweetData) => {
    return tweetData.map((tweet, i) => (
        <Tweet key = {i} tweet = {tweet} />
    ));    
  }
