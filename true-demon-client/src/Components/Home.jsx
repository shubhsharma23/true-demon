//Home component
import "../App.css";
import Banner from "./Banner";
import Products from "./Products";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <main className="flex-grow">
        <Products />
      </main>
    </div>
  );
}

export default Home;
