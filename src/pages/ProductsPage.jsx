import React, { useState, useEffect } from 'react';
import { api } from '../services/axios';
import { ProductCard } from '../components/products/ProductCard';
import { AddProductForm } from '../components/products/AddProductForm';
import Header from '../components/common/Header';
import { Footer } from '../components/common/Footer';
export function ProductPage({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProduct = async (productData) => {
    try {
      const response = await api.post('/products/add', productData);
      setProducts((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Header 
        onLogout={onLogout}
        onAddProduct={() => setIsAddingProduct(true)} 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onDelete={handleDeleteProduct}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600">
                No products available.
              </div>
            )}
          </div>
        )}
      </main>

      {isAddingProduct && (
        <AddProductForm
          onAdd={handleAddProduct}
          onClose={() => setIsAddingProduct(false)}
        />
      )}
      <Footer />
    </div>
  );
}
