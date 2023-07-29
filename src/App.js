import './App.css';
import Home from './Components/Home/Home';
import Navabar from './Components/Navbar/Navabar';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
          <Navabar/>
          <Routes>
          <Route path='/' exact element={<Home/>}/>
          </Routes>
          
    </Router>
      
    </>
  );
}

export default App;
