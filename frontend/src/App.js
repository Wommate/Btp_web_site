import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import AllGallery from "./pages/allGallery";
import { useEffect } from "react";
import Aos from "aos";
import ArticleBlog from "./pages/articleBlog";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/articleBlog" element={<ArticleBlog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/allGallery" element={<AllGallery />} />
      <Route path="*" element={<h1 className="text-4xl text-center font-bold my-48"> 404 | Page Non Trouvé</h1>} />
    </Routes>
  );
}

export default App;