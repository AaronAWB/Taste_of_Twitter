import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Random from './pages/Random';

function App() {

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/random' element={<Random />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
