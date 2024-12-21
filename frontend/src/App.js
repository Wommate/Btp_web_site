import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import AllGallery from "./pages/allGallery";

// Import for dashboard
import Dashboard from "./pages/dashboard/dashboard/dashboard";
import BlogForm from "./pages/dashboard/blog/blog";
import GalleryForm from "./pages/dashboard/gallery/gallery";
import RegisterForm from "./pages/dashboard/register/register";
import LoginForm from "./pages/dashboard/login/login";
import AuthWrapper from "./pages/dashboard/login/auth";
import ProtectionRoutes from "./pages/dashboard/login/protectionRoutes";

function App() {
  return (
    <>
      {/* Routes publiques */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/allGallery" element={<AllGallery />} />
      </Routes>

      {/* Routes nécessitant une authentification */}
      <Routes>
        <Route
          path="/dashboard/*"
          element={
            <AuthWrapper>
              <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<RegisterForm />} />
                <Route path="blog" element={<BlogForm />} />
                <Route path="gallery" element={<GalleryForm />} />
              </Routes>
            </AuthWrapper>
          }
        />
        {/* Page pour accès non autorisé */}
        <Route path="*" element={<ProtectionRoutes />} />
      </Routes>
    </>
  );
}

export default App;
