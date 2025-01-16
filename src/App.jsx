import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Home/Navbar";
import About from "./components/About/About";
import Footer from "./components/Home/Footer";
import FAQ from "./components/Home/FAQ.JSX";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/waaka" element={<Home />} />
          <Route path="/waaka/about" element={<About />} />
          <Route path="/waaka/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
