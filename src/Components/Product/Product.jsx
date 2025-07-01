import React from 'react';
import { CiHeart } from 'react-icons/ci';

const Product = ({ product, handleBookmark, clickedIds }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 font-medium text-gray-900">
        <div className="flex items-center gap-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-12 h-12 object-cover rounded-3xl"
          />
          <p>{product.title}</p>
        </div>
      </td>
      <td className="px-6 py-4 text-gray-700">${product.currentBidPrice}</td>
      <td className="px-6 py-4 text-gray-600">{product.timeLeft}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleBookmark(product)}
          className={`p-2 rounded-full ${
            clickedIds.includes(product.id) ? 'bg-red-200' : 'bg-gray-200'
          }`}
        >
          <CiHeart size={22} />
        </button>
      </td>
    </tr>
  );
};

export default Product;
