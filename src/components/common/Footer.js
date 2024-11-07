import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold">Store Keeper</h2>
            <p className="mt-2 text-gray-400">
              Manage your products, track inventory, and streamline your store's operations. Your all-in-one solution for efficient storekeeping.
            </p>
          </div>

          <div className="mt-8 sm:mt-0">
            <ul className="flex justify-center sm:justify-end space-x-6">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Store Keeper, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
