import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./pages/HeroSection";
import MainContent from "./pages/MainContent";
import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
    </div>
  );
}

export default App;
