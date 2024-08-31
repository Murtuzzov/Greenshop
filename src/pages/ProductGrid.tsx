import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setPage } from "../redux/slices/paginationSlice";
import { setFilter } from "../redux/slices/filterSaleSlice";
import { RootState } from "../redux/store";

interface Product {
  id: number;
  name: string;
  size: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  description: string;
}

const parsePrice = (price: string) =>
  parseFloat(price.replace(/[^0-9.-]+/g, ""));

const ProductGrid: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentPage, productsPerPage } = useSelector(
    (state: RootState) => state.pagination
  );
  const filter = useSelector((state: RootState) => state.filterSale.filter);
  const { category, size, price } = useSelector(
    (state: RootState) => state.filter
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("default");

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

  // Фильтрация продуктов
  const filteredProducts = products
    .filter((product) => (filter === "sale" ? product.discount : true))
    .filter((product) => (category ? product.category === category : true))
    .filter((product) => (size ? product.size === size : true))
    .filter((product) =>
      price > 0 ? parsePrice(product.price) <= price : true
    );

  // Сортировка продуктов
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "priceAsc":
        return parsePrice(a.price) - parsePrice(b.price);
      case "priceDesc":
        return parsePrice(b.price) - parsePrice(a.price);
      default:
        return 0; // Без сортировки
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleProductClick = (id: number) => {
    localStorage.setItem("lastViewedProductId", id.toString());
    navigate(`/product/${id}`);
  };

  const handleFilterChange = (newFilter: "all" | "sale") => {
    dispatch(setFilter(newFilter));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const shouldShowPagination =
    filter !== "sale" || filteredProducts.length > productsPerPage;

  return (
    <div className="product-grid ml-10">
      <div className="flex justify-between items-center mb-12">
        <div className="flex space-x-8">
          <button
            className={`text-green-600 font-semibold ${
              filter === "all" ? "border-b-2 border-green-600" : ""
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All Plants
          </button>
          <button
            className={`text-green-600 font-semibold ${
              filter === "sale" ? "border-b-2 border-green-600" : ""
            }`}
            onClick={() => handleFilterChange("sale")}
          >
            Sale
          </button>
        </div>
        <div className="flex items-center ml-20">
          <span className="text-gray-600 mr-4">Sort by: </span>
          <select
            className="font-semibold"
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="default">Default sorting</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card flex flex-col bg-white shadow-lg border rounded-md overflow-hidden transition-transform transform hover:scale-110 hover:shadow-2xl hover:border-green-400 hover:border-opacity-60 cursor-pointer"
              style={{ width: "250px", maxHeight: "350px" }}
              data-aos="fade-up"
              data-aos-delay={`${index * 50}`}
              data-aos-duration="500"
              onClick={() => handleProductClick(product.id)}
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
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      {currentProducts.length > 0 && shouldShowPagination && (
        <div className="pagination flex justify-end mt-8 mr-24 mb-20">
          <button
            className={`mx-1 px-3 py-2 ${
              currentPage === 1
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => dispatch(setPage(1))}
          >
            1
          </button>
          <button
            className={`mx-1 px-3 py-2 ${
              currentPage === 2
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => dispatch(setPage(2))}
          >
            2
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
