import { useState } from 'react'
import Axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Tweet from './components/Tweet/Tweet';
import Home from './pages/Home';
import Search from './pages/Search';
import Random from './pages/Random';

function App() {

  const baseURL = 'http://127.0.0.1:5000/api/tweets/'

  const [tweets, setTweets] = useState([]);
  
  const getTweets = async (userSearch) => {
      
      let path = baseURL;
    
      userSearch.startsWith('@') 
      ? path = baseURL+'handle_search/'+userSearch
      : path = baseURL+'keyword_search/'+userSearch

      try {
          const response = await Axios.get(path);
          const tweetResults = response.data.statuses;
          setTweets(tweetResults)
          console.log(tweetResults)
      }
      catch(error) {
          console.log(error)
      }
  }

  const renderTweets = () => {
    return tweets.map((tweet, i) => (
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
            <Route path='/search' element={<Search renderTweets={renderTweets} getTweets={getTweets}/>}></Route>
            <Route path='/random' element={<Random getTweets={getTweets}/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
