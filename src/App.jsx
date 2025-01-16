import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Home/Navbar";
import About from "./components/About/About";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import FAQ from "./components/Home/FAQ";

function App() {
  return (
    <Router basename="/waaka">
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
