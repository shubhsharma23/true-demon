import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductView from "./ProductView";
import Spinner from "./Spinner";
import productSampleImage from '../assets/images/ProductImages/Satoru_Gojo.webp';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const baseURL = "http://localhost:3000/products/";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(baseURL+"getProducts");
        setProducts(response.data);
      } catch (err) {
        console.error("Error occurred", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  const handleProductClick = (product) => {
    // Set the selected product when clicked
    setSelectedProduct(product);
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Replace this div with your preferred spinner component or custom spinner */}
          <Spinner />
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-950">
        {products.map((product) => (
         <div
         key={product._id}
         className="bg-white shadow-lg m-3 p-4 border-4 border-red-800 rounded-lg rounded-br-sm transition transform hover:scale-105 hover:border-gray-500 cursor-pointer flex flex-col"
         onClick={() => handleProductClick(product)}
       >
         <img
           src={productSampleImage}
           alt={product.name}
           className="w-full object-cover mb-4"
           style={{ height: "15rem" }}
         />
         <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
         <p className="text-gray-900 text-sm">
           {truncateTitle(product.title, 38)}
         </p>
         <div className="flex-grow" />
         <div className="flex flex-col md:flex-row items-center justify-between">
           <p className="text-gray-600 mb-2 md:mb-0">
             ₹{product.price}{" "}
             <span className="text-red-500 line-through">
               ₹{product.price * 2}
             </span>
           </p>
           <p className="text-green-500 text-sm">
             ({((1 - product.price / (product.price * 2)) * 100).toFixed(0)}%
             OFF)
           </p>
         </div>
       </div>
       
        ))}
      </div>
      {/* Render the ProductView modal if a product is selected */}
      {selectedProduct && (
        <ProductView
          product={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          componentName="products"
        />
      )}
    </div>
  );
};

export default Products;
