import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setActiveLink } from "../redux/slices/activeLinkSlice";
import { addToCart } from "../redux/slices/cartSlice"; // Импортируем действие

interface Product {
  id: number;
  name: string;
  size: string[];
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  description: string;
}

const allSizes = ["S", "M", "L"];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!id) {
      navigate("/shop");
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
        dispatch(setActiveLink("/shop"));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id, navigate, dispatch]);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          size: product.size[0], // Вы можете добавить выбор размера, если это нужно
        })
      );
    }
  };
  return (
    <div className="max-w-screen-lg mx-auto my-8 p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="col-span-2 mb-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-green-600 font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </button>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-[404px] h-[404px] object-cover rounded-lg shadow-md"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-1">{product.name}</h1>
        <p className="mb-4">
          <span className="font-semibold">Categories:</span> {product.category}
        </p>
        <p className="text-2xl text-green-600 font-semibold mb-4">
          {product.price}
        </p>

        <div className="mb-6">
          <span className="text-lg font-semibold">Size: </span>
          {allSizes.map((size) => (
            <span
              key={size}
              className={`ml-2 px-4 py-2 rounded-full border text-lg font-semibold ${
                product.size.includes(size)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {size}
            </span>
          ))}
        </div>

        <div className="flex items-center mb-6">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="text-xl font-bold px-2 py-1 border rounded-full bg-green-500 text-white"
          >
            -
          </button>
          <span className="text-xl font-bold px-6">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="text-xl font-bold px-2 py-1 border rounded-full bg-green-500 text-white"
          >
            +
          </button>
        </div>

        {product.discount && (
          <p className="text-red-500 text-lg mb-4">{product.discount}</p>
        )}

        <div className="flex space-x-4 mb-6">
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-white text-green-500 border border-green-500 text-lg font-bold rounded-lg shadow-md"
          >
            ADD TO CART
          </button>
          <button className="px-6 py-3 bg-white text-green-500 border border-green-500 text-lg font-bold rounded-lg shadow-md">
            BUY NOW
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <h5 className="text-xl font-semibold mb-2">Description:</h5>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
