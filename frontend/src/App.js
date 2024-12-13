import './App.css';
import Contact from './components/contact/Contact';
import FAQ from './components/faq/FAQ';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Btp WebSite</h1>
        <FAQ />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
