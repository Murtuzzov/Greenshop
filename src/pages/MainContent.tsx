import React from "react";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import ProductGrid from "./ProductGrid";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import BlogPosts from "../components/BlogPosts/BlogPosts";
import Footer from "../components/BlogPosts/Footer/Footer";

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <FilterSidebar className="w-64 mr-4 flex-shrink-0" />{" "}
        {/* Добавил отступ */}
        <ProductGrid />
      </div>

      {/* Баннеры */}
      <PromoBanner />

      {/* Блог посты */}

      <BlogPosts />
      <Footer />
    </div>
  );
};

export default MainContent;
