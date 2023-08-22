import AboutPage from "./Components/About/AboutPage";
import PastEvents from "./Components/PastEvents/PastEvents";
import Footer from "./Components/Footer/Footer";
import Sponsors from "./Components/Sponsors/Sponsors";
import HomePage from "./Components/Home/HomePage";
import Navabar from "./Components/Navbar/Navabar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <HomePage />
                <AboutPage />
                <PastEvents />
                <Sponsors />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
