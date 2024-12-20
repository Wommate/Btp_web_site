import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Dashboard from './pages/dashboard/dashboard/dashboard';
// import BlogForm from './pages/dashboard/blog/blog';
// import GalleryForm from './pages/dashboard/gallery/gallery';
import RegisterForm from './pages/register/register';  
//import LoginForm from './pages/login/login'; 

function App() {
  return (
    <RegisterForm />
    // <Router>
    //   <Routes>
        
    //     <Route path="/" element={<Dashboard />} />
    //     <Route path="/blog" element={<BlogForm />} />
    //     <Route path="/gallery" element={<GalleryForm />} />
    //   </Routes>
    // </Router>
  );
}

export default App;





    // <GalleryForm />
    // <BlogForm />
    // <Dashboard />
    // <LoginForm />
    //<RegisterForm />



 
 

