import React from 'react';
import { Package, Plus, LogOut } from 'lucide-react';

const Header = ({ onLogout, onAddProduct }) => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Package className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Store Keeper</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onAddProduct}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Product</span>
            </button>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center space-x-2"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
