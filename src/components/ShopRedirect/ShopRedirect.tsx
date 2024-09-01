// src/pages/ShopRedirect.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  price: string;
}

const parsePrice = (price: string): number =>
  parseFloat(price.replace(/[^0-9.-]+/g, ""));

const ShopRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:3000/products"
        );
        const products = response.data;
        const cheapestProduct = products.reduce((min, product) =>
          parsePrice(product.price) < parsePrice(min.price) ? product : min
        );

        const lastViewedProductId = localStorage.getItem("lastViewedProductId");
        if (lastViewedProductId) {
          navigate(`/product/${lastViewedProductId}`);
        } else {
          navigate(`/product/${cheapestProduct.id}`);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [navigate]);

  return null;
};

export default ShopRedirect;
