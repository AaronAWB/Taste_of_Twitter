import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Tweet from './components/Tweet/Tweet';
import Home from './pages/Home';
import Search from './pages/Search';
import Random from './pages/Random';

function App() {

  const renderTweets = (tweetData) => {
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

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search renderTweets={renderTweets}/>}></Route>
            <Route path='/random' element={<Random renderTweets={renderTweets}/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
