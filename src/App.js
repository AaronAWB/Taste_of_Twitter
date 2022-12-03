import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Tweets from './pages/Tweets';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/tweets' element={<Tweets />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
