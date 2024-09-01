import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/shop");
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1212px] mx-auto flex gap-48 items-center justify-between px-6">
        <div className="max-w-lg">
          <h1 className="text-gray-800 text-sm uppercase mb-2 tracking-wider font-bold">
            Welcome to Greenshop
          </h1>
          <h2 className="text-7xl font-bold text-gray-900 leading-tight uppercase w-[700px]">
            Let's Make a Better <span className="text-green-600">Planet</span>
          </h2>
          <p className="text-gray-600 mb-8">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create a unique Urban Jungle. Order
            your favorite plants!
          </p>
          <button
            onClick={handleShopNowClick}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Shop Now
          </button>
        </div>
        <div className="relative flex-shrink-0">
          <img
            src="./src/assets/images/large-hero-plant.png"
            alt="Plant"
            className="w-[518px] h-auto"
          />
          <img
            src="./src/assets/images/small-hero-plant.png"
            alt=""
            className="absolute bottom-9 left-12 w-[135px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
