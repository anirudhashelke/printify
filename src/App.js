
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProductFeatures from './components/ProductFeatures';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
    <Header />
    <Hero />
    <ProductFeatures />
    <HowItWorks />
    <Contact />
    <Testimonials />
    <Footer />
  </div>
  );
}

export default App;
