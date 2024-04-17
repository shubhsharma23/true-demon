//App.jsx component
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Products from "./Components/Products";
import ProductView from "./Components/ProductView";
import Wishlist from "./Components/Wishlist";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="product-view" element={<ProductView />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
