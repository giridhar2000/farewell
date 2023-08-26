import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Travel from './Components/Travel/Travel';
import Navbar from './Components/Navbar/Navbar';
import Story from './Components/Story/Story';
import Photos from './Components/Photos/Photos';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <Navbar />
        <Router>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/travel' element={<Travel />}></Route>
            <Route path='/Story' element={<Story />}></Route>
            <Route path='/Photos' element={<Photos />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
