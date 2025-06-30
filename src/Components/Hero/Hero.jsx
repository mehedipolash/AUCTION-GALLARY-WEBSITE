import React from 'react';

const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: 'url(https://i.ibb.co/NdZv9NYM/Banner-min.jpg)',
        }}
      >
        <div className="hero-overlay"></div>
        <div className=" text-neutral-content ">
          <div className="mr-[850px]">
            <h1 className="text-4xl font-semibold mb-2">
              Bid on Unique Items from <br /> Around the World
            </h1>
            <p className="mb-5">
              Discover rare collectibles, luxury goods, and vintage <br />{' '}
              treasures in our curated auctions
            </p>
            <button className="btn rounded-4xl">Explore Auctions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
