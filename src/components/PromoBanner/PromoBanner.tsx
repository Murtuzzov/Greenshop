import React from "react";

const PromoBanner: React.FC = () => {
  return (
    <div className="flex gap-8 justify-center mb-8 ">
      {/* Первая карточка */}
      <div className="flex items-center p-6 bg-white shadow-lg border rounded-md w-[45%] transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="./src/assets/images/succulents.png"
          alt="Summer Cactus & Succulents"
          className="w-[150px] h-[auto] mr-6"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">SUMMER CACTUS & SUCCULENTS</h2>
          <p className="text-gray-600 mb-4">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
            Find More →
          </button>
        </div>
      </div>

      {/* Вторая карточка */}
      <div className="flex items-center p-6 bg-white shadow-lg border rounded-md w-[45%] transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="./src/assets/images/decor_plant.png"
          alt="Styling Trends & Much More"
          className="w-[150px] h-[auto] mr-6"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">STYLING TRENDS & MUCH MORE</h2>
          <p className="text-gray-600 mb-4">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
            Find More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
