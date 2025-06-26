import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './common/Navbar';
import Home from './pages/Home';
import Footer from './common/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import OurBrands from './pages/OurBrands';
import Infrastructure from './pages/Infrastructure';
import PrivateLabel from './pages/PrivateLabel';
import Partnership from './pages/Partnership';
import Product from './pages/Product';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/ourbrands' element={<OurBrands />} /> 
        <Route path='/infrastructure' element={<Infrastructure />} /> 
        <Route path='/private-labelling' element={<PrivateLabel />} />
        <Route path='/partnership' element={<Partnership />} />
        <Route path='/products' element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
