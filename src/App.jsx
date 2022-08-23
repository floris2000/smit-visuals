import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Interieur from './components/interieur/Interieur';
import InterieurSc from './components/interieurSc/InterieurSc';
import Exterieur from './components/exterieur/Exterieur';
import ExterieurSc from './components/exterieurSc/ExterieurSc';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';


const App = () => {

  return(
    <div>
      <Navbar/>
      <Hero/>
      <Interieur/>
      <InterieurSc/>
      <Exterieur/>
      <ExterieurSc/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;