// src/App.js
import './assets/style/app.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ShowProject from './components/Project_show';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='nav'>
        <div className='logo_name'>
          <h1>VS</h1>
        </div>
        <div className='menu_item'>
          <ul>
            <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="portfolio" smooth={true} duration={500}>Skilled</ScrollLink></li>
            <li><ScrollLink to="project" smooth={true} duration={500}>Projects</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
          </ul>
        </div>
      </div>
      <div className='body_item'>
        <Element name="home" className='element'>
          <Home />
        </Element>
        <Element name="about" className='element'>
          <About />
        </Element>
        <Element name="portfolio" className='element'>
          <Portfolio />
        </Element>
        <Element name="project" className='element'>
          <ShowProject />
        </Element>
        <Element name="contact" className='element'>
          <Contact />
        </Element>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
