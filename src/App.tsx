import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./pages/HeroSection";
import MainContent from "./pages/MainContent";
import ProductDetails from "./pages/ProductDetails";
import ShopRedirect from "./components/ShopRedirect/ShopRedirect";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MainContent />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<ShopRedirect />} />
      </Routes>
    </div>
  );
}

export default App;
