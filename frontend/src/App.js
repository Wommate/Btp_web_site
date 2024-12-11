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
  );
}

export default App;