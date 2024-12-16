<<<<<<< HEAD
import './App.css';
import Navbar_sup from './components/navbar_sup/navbar_sup'
import Navbar from './components/navbar/navbar';
import Hero_section from './components/hero_section/hero_section';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className="">      
        <Navbar />
        <Hero_section />
        <header className="App App-header">
          <Contact />
          <Footer />
        </header>
      </div>
    </>
=======
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Faq from "./pages/faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
>>>>>>> f898713fe59674a17d0458896e6dbfac6c32a7ba
  );
}

export default App;