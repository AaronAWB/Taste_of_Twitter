import useState from 'react'
import Axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Random from './pages/Random';

function App() {

  const [keyword, setKeyword] = useState('');
  const [tweets, setTweets] = useState([]);
  
  const handleSearchRequest = async (path) => {
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

  const renderTweets = (tweets) => {
    return tweets.map((tweet, i)=>(
        <Tweet
        key = {i}
        name={tweets.user.name}
        handle={tweets.user.screen_name}         
        text={tweets.text} 
        image={renderTweetImage}
        retweets={tweets.retweet_count}
        favorites={tweet.favorite_count}
        />
    ));    
  }

  const renderTweetImage = () => {
    if ()
  }

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search renderTweets={renderTweets} searchRequest={handleSearchRequest}/>}></Route>
            <Route path='/random' element={<Random />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
