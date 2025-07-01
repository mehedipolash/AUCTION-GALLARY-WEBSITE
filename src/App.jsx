import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import { CiHeart } from 'react-icons/ci';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [bidsAmount, setBidsAmount] = useState(0); // ✅ Corrected useState

  const handleBookmark = product => {
    if (!clickedIds.includes(product.id)) {
      setBookmarked([...bookmarked, product]);
      setClickedIds([...clickedIds, product.id]);
      setBidsAmount(prev => prev + Number(product.currentBidPrice)); // ✅ Fixed variable name + ensured number
      toast.success('Item added to list');
    }
  };

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
              <Products
                handleBookmark={handleBookmark}
                clickedIds={clickedIds}
              />
            </div>

            <div className="right-container w-[30%] bg-white rounded-2xl">
              <div className="flex gap-x-2 items-center mx-[85px] mb-5 border-b">
                <CiHeart size={35} />
                <h2 className="text-cyan-600 font-semibold text-[22px]">
                  Favorite Items
                </h2>
              </div>

              {bookmarked.length === 0 ? (
                <div className="text-center text-gray-500 ">
                  <h2 className="text-lg font-semibold">No Favourite Yet</h2>
                  <p>
                    Click the heart icon on any item to add it to your
                    favourites
                  </p>
                </div>
              ) : (
                bookmarked.map(marked => (
                  <div key={marked.id} className="border-1 rounded-md p-2 m-2">
                    <div className="flex items-center pr-2 gap-x-10">
                      <img
                        src={marked.image}
                        alt={marked.title}
                        className="w-15 h-15 rounded-xl mb-2"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {marked.title}
                        </p>
                        <p>${marked.currentBidPrice}</p>
                        <p>Bids: {marked.bidsCount}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}

              <div className="mt-6 border-t p-4">
                <h3 className="text-lg font-bold text-shadow-blue-950">
                  Total Bids Amount: ${bidsAmount}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </>
  );
}

export default App;
