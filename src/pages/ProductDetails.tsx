import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto my-8 p-4 border rounded-md shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto object-cover mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-2">{product.category}</p>
      <p className="text-2xl text-green-600 font-semibold mb-4">
        {product.price}
      </p>
      {product.oldPrice && (
        <p className="line-through text-gray-500 text-lg mb-4">
          {product.oldPrice}
        </p>
      )}
      {product.discount && (
        <p className="text-red-500 text-lg mb-4">{product.discount}</p>
      )}
      <p className="text-lg">Size: {product.size}</p>
    </div>
  );
};

export default ProductDetails;
