import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import { CiHeart } from 'react-icons/ci';

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="bg-[#DCE5F3]">
        <div className="mx-[120px] pt-[122px] pb-[60px]">
          <h2 className="font-bold text-blue-950 text-2xl">Active Auctions</h2>
          <p className="text-xl mb-4">
            Discover and bid on extraordinary items
          </p>

          <div className="main-container flex items-start gap-12">
            <div className="left-container w-[70%]">
              <Products />
            </div>

            <div className="right-container w-[30%] bg-white rounded-2xl">
              <div className="flex gap-x-2 items-center mx-[85px] mb-5 border-b">
                <CiHeart size={35} />
                <h2 className="text-cyan-600 font-semibold text-[22px] items-center text-center justify-start">
                  Favorite Items
                </h2>
              </div>

              <div className="text-center text-gray-500 ">
                <h2 className="text-lg font-semibold">No Favourite Yet</h2>
                <p>
                  Click the heart icon on any item to add it to your favourite
                </p>
              </div>

              <div className="mt-6 border-t p-4">
                <h3 className="text-lg font-bold text-shadow-blue-950">
                  Total Bids Amount:
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
