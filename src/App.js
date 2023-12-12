import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Expericence from './components/experience/Expericence';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
      <>
        <Header/>
        <Nav/>
       
        <Expericence/>
       
        <Portfolio/>
       
        <Contact/>
        <Footer/>
      </>
  );
}

export default App;
