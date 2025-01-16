import "./App.css";
import NavBar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import Properties from "./components/Home/Properties";
import Popular from "./components/Home/Popular";
import CoreValues from "./components/Home/CoreValues";
import Testimonials from "./components/Home/Testimonials";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Properties />
      <Popular />
      <CoreValues />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
