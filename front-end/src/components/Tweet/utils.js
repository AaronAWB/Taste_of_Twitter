import Tweet from './Tweet';

const renderTweets = (tweetData) => {
    return tweetData.map((tweet, i) => (
        <Tweet key = {i} tweet = {tweet} />
    ));    
  }

const formatDate = (isoDate) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(isoDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

export { renderTweets, formatDate };