import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Home/NavBar";
import About from "./components/About/About";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/Home/ScrollToTop";
import Contact from "./components/About/Contact";

function App() {
  return (
    <Router basename="/waaka">
      <div className="app">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
