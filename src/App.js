import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Products from './components/Products';
import Waffle from './components/Waffle';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto" >

      <Navbar />
      <Header />
      <Features />
      <Products />
      <Waffle />
      <Footer />
      
    </div>
  );
}

export default App;
