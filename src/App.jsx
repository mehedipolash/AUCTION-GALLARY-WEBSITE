import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <div className="mx-[120px] my-[122px]">
        <h2 className="font-bold text-blue-950 text-2xl">Active Auctions</h2>
        <p className="text-xl">Discover and bid on extraordinary items</p>
      </div>

      <Products></Products>

      <Footer></Footer>
    </>
  );
}

export default App;
