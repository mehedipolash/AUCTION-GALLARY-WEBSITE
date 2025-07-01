import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-base-200">
      <div className="mx-[120px]">
        <div className="navbar  shadow-sm flex justify-between">
          <div>
            <a className="text-xl font-bold">
              <span className="text-indigo-700">Auction</span>
              <span className="text-orange-300">Gallery</span>
            </a>
          </div>

          <div className="space-x-8">
            <a href="">Home</a>
            <a href="">Auctions</a>
            <a href="">Categories</a>
            <a href="">How to works</a>
          </div>

          <div>
            {/* Notification Icon */}
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">3</span>
              </div>
            </button>

            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
