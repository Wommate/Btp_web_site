import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from "./components/footer/Footer";
import { hydrate, render } from "react-dom";
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    
    <App />
    <Footer />
  </BrowserRouter>
);


// const APP = (
//   <BrowserRouter>
//     <Navbar />
//     <App />
//     <Footer />
//   </BrowserRouter>
// )
 
// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(APP, rootElement);
// } else {
//   render(APP, rootElement);
// }

reportWebVitals();
