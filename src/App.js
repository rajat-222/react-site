import "./App.css";
import Footer from "./Components/Footer/Footer";
// import Home from './Components/Home/Home';
import HomePage from "./Components/Home/HomePage";
import Navabar from "./Components/Navbar/Navabar";
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
