import React, { useState, useEffect } from "react";
import ProductView from "./ProductView";
import Spinner from "./Spinner"; // Assuming Spinner component is available

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getWishlistData = () => {
      try {
        const myWishlist = JSON.parse(localStorage.getItem("myWishlist")) || [];
        setProducts(myWishlist);
      } catch (error) {
        console.error("Error fetching wishlist data:", error);
      } finally {
        setLoading(false);
      }
    };

    getWishlistData();
  }, []);

  const removeFromWishlist = (product) => {
    const updatedWishlist = products.filter((item) => item.id !== product.id);
    localStorage.setItem("myWishlist", JSON.stringify(updatedWishlist));
    setProducts(updatedWishlist);
    alert("Item is successfully removed from the wishlist");
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-center text-2xl font-bold mb-4">Wishlist</h1>

      <div className="flex-grow">
        {loading ? (
          <Spinner />
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
              key={product.id}
              className="relative p-4 bg-white shadow-lg m-3 border-4 rounded-lg rounded-br-sm transition transform hover:scale-105 hover:border-gray-500 cursor-pointer flex flex-col"
              onClick={() => handleProductClick(product)}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromWishlist(product);
                }}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover mb-4"
                style={{ height: "15rem" }}
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-900 text-sm">
                {truncateTitle(product.title, 38)}
              </p>
              <div className="flex-grow" />
              <div className="flex justify-between items-center mt-auto">
                <p className="text-gray-600 mb-2 md:mb-0">
                  ₹{product.price}{" "}
                  <span className="text-red-500 line-through">
                    ₹{product.price * 2}
                  </span>
                </p>
                <p className="text-green-500 text-sm">
                  {((1 - product.price / (product.price * 2)) * 100).toFixed(
                    0
                  )}
                  % OFF
                </p>
              </div>
            </div>
            
            ))}
          </div>
        ) : (
          <div className="text-lg flex justify-center items-center h-full">
            No items available
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductView
          product={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          componentName="wishlist"
        />
      )}
    </div>
  );
};

export default Wishlist;
