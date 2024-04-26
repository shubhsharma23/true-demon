//ProductView component
import React, { useRef, useEffect } from "react";
import productSampleImage from '../assets/images/ProductImages/AGHORI.webp';

const ProductView = ({ product, setSelectedProduct, componentName }) => {
  const modalRef = useRef(null);

  // Close modal when clicking outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setSelectedProduct(null);
    }
  };

  console.log("all details",{ product, setSelectedProduct, componentName });
  useEffect(() => {
    console.log(componentName);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addToWishlist = (product) => {
    let myWishlist = JSON.parse(localStorage.getItem("myWishlist")) || [];

    const isProductInWishlist = myWishlist.some(
      (item) => item.id === product.id
    );

    if (!isProductInWishlist) {
      myWishlist.push(product);
      localStorage.setItem("myWishlist", JSON.stringify(myWishlist));
      console.log("wishlist", myWishlist);
      setSelectedProduct(null);
      alert("Item is successfully added in the wishlist");
    } else {
      alert("Item is already added in the wishlist");
    }
  };

  // Calculate the rating average
  const ratingAverage = (product.rating.rate / 5) * 100;

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-70 z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg max-w-4xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setSelectedProduct(null)}
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
        </div>
        <div className="flex">
          <div className="w-1/2 mr-8 relative">
            <img
              src={productSampleImage}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300"
              style={{ maxHeight: "600px" }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>

          <div className="w-1/2">
            <div>
              <h1 className="text-gray-700 text-lg font-semibold">
                {product.title}
              </h1>
              <p className="text-gray-600 mt-2">
                <span className="font-bold text-gray-700">Category: </span>
                {product.category}
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-bold text-gray-700">Rating: </span>
                {product.rating.rate}/5 ({product.rating.count} reviews)
              </p>
              <div className="mt-2">
                <div className="bg-gray-200 h-3 w-full rounded-lg overflow-hidden">
                  <div
                    className="bg-green-400 h-full"
                    style={{ width: `${ratingAverage}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                <span className="font-bold text-gray-700">Price: </span>₹
                {product.price}
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-bold text-gray-700">Sizes: </span>
                {/* {product.sizes ? product.sizes.join(", ") : "Not available"} */}
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-bold text-gray-700">Description: </span>
                {product.description}
              </p>
            </div>
            <div className="mt-4">
              {componentName != "wishlist" ? (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => alert("Added to Bag")}
                >
                  Add to Bag
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => alert("Added to Bag")}
                >
                  Move to Bag
                </button>
              )}
              {componentName != "wishlist" ? (
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={() => addToWishlist(product)}
                >
                  Add to Wishlist
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
