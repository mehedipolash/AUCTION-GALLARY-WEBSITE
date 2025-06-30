import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <div className="gap-y-3">
          <nav className="grid grid-flow-col  gap-y-1">
            <a
              className="text-xl font-bold
            "
            >
              <span className="text-indigo-700">Auction</span>
              <span className="text-orange-300">Gallery</span>
            </a>
          </nav>

          <nav>
            <div className="grid grid-flow-col ">
              <p className="font-normal text-sm">Bid. Win. Won.</p>
            </div>
          </nav>
          <nav>
            <div className="grid grid-flow-col">
              <p className="font-normal text-sm">
                Home &nbsp; Auctions &nbsp; categories &nbsp; How to works
              </p>
            </div>
          </nav>

          <small>
            <p>
              Actionshub © {new Date().getFullYear()} - All right reserved by Md
              Mehedi.
            </p>
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
