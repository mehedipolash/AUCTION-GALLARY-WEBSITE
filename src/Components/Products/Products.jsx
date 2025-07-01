import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({ handleBookmark, clickedIds }) => {
  const [products, setProducts] = useState([]);

  // console.log(handleBookmark)

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="mx-[-5px]">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden ">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-3 text-left">Items</th>
              <th className="px-6 py-3 text-left">Current Bid</th>
              <th className="px-6 py-3 text-left">Time Left</th>
              <th className="px-6 py-3 text-left">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <Product
                product={product}
                key={product.id}
                handleBookmark={handleBookmark}
                clickedIds={clickedIds}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
