import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  size: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
}

interface ProductGridProps {
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ className }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={`${className} ml-10`}>
      {/* Верхняя часть с фильтрами и сортировкой */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-8">
          <button className="text-green-600 font-semibold border-b-2 border-green-600">
            All Plants
          </button>
          <button className="text-gray-600 font-semibold">Sale</button>
        </div>
        <div className="text-gray-600">
          <span>Sort by: </span>
          <select className="font-semibold">
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Карточки продуктов */}
      <div className="flex flex-wrap gap-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-card flex flex-col bg-white shadow-lg border rounded-md overflow-hidden transition-transform transform hover:scale-110 hover:shadow-2xl hover:border-green-400 hover:border-opacity-60 cursor-pointer"
            style={{ width: "250px", maxHeight: "350px" }}
            data-aos="fade-up"
            data-aos-delay={`${index * 50}`}
            data-aos-duration="500"
            onClick={() => handleProductClick(product.id)} // Добавляем обработчик клика
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="product-info flex flex-col p-2 flex-grow">
              <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-1">
                {product.size} | {product.category}
              </p>
              <p className="text-green-600 font-bold text-base">
                {product.price}
              </p>
              {product.oldPrice && (
                <p className="line-through text-gray-500 text-xs">
                  {product.oldPrice}
                </p>
              )}
              {product.discount && (
                <p className="text-red-500 text-xs">{product.discount}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="pagination flex justify-end mt-8 mr-24 mb-20">
        <button className="mx-1 px-3 py-2 bg-green-600 text-white">1</button>
        <button className="mx-1 px-3 py-2 bg-gray-200">2</button>
        <button className="mx-1 px-3 py-2 bg-gray-200">3</button>
        <button className="mx-1 px-3 py-2 bg-gray-200">4</button>
        <button className="mx-1 px-3 py-2 bg-gray-200">&gt;</button>
      </div>
    </div>
  );
};

export default ProductGrid;
