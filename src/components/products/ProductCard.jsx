import React from 'react';
import { Trash2 } from 'lucide-react';

export function ProductCard({ product, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-48">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <button
          onClick={() => onDelete(product.id)}
          className="absolute top-4 right-4 p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
          aria-label="Delete product"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
            {product.title}
          </h3>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            {product.stock} in stock
          </span>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </span>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500">{product.brand}</span>
            <span className="text-xs text-gray-400">{product.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}