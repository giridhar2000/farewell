import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Travel from './Components/Travel';
import Navbar from './Components/Navbar';
import Story from './Components/Story';
import Photos from './Components/Photos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
