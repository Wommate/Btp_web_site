import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import AllGallery from "./pages/allGallery";

// Import des pages  dashboard
import Dashboard from "./pages/dashboard/dashboard/dashboard";
import BlogForm from "./pages/dashboard/blog/blog";
import GalleryForm from "./pages/dashboard/gallery/gallery";
import RegisterForm from "./pages/dashboard/register/register";
import LoginForm from "./pages/dashboard/login/login";
import AuthWrapper from "./pages/dashboard/login/authWrapper";
import ProtectionRoutes from "./pages/dashboard/login/protectionRoutes";
import Logout from "./pages/dashboard/login/logout";
import TabNotification from "./pages/dashboard/tabNotification/tabNotification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes accessibles sans authentification */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/allGallery" element={<AllGallery />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Routes protégées */}
        <Route
          path="/dashboard"
          element={
            <AuthWrapper>
              <Dashboard />
            </AuthWrapper>
          }
        >
          {/* les routes enfants du dashboard */}
          <Route index element={<TabNotification />} />
          <Route path="blog" element={<BlogForm />} />
          <Route path="gallery" element={<GalleryForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        {/*  routes non trouvées */}
        <Route path="*" element={<ProtectionRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
