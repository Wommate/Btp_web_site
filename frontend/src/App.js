import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import des composants
import Dashboard from "./pages/dashboard/dashboard/dashboard";
import BlogForm from "./pages/dashboard/blog/blog";
import GalleryForm from "./pages/dashboard/gallery/gallery";
import RegisterForm from "./pages/dashboard/register/register";
import LoginForm from "./pages/dashboard/login/login";
import AuthWrapper from "./pages/dashboard/login/authWrapper";
import ProtectionRoutes from "./pages/dashboard/login/protectionRoutes";
import Logout from "./pages/dashboard/login/logout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes accessibles sans authentification */}
        <Route path="login" element={<LoginForm />} />
        

        {/* Routes protégées */}
        <Route
          path="/dashboard/*"
          element={
            <AuthWrapper>
              <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="blog" element={<BlogForm />} />
                <Route path="gallery" element={<GalleryForm />} />
                <Route path="register" element={<RegisterForm />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </AuthWrapper>
          }
        />

        {/* Page pour accès non autorisé ou routes non trouvées */}
        <Route path="*" element={<ProtectionRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
