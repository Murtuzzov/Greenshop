// src/components/FilterSidebar.tsx
import React, { useEffect, useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCategory, setSize, setPrice } from "../../redux/slices/filterSlice";

interface FilterSidebarProps {
  className?: string;
}

interface Category {
  name: string;
  count: number;
}

interface Size {
  name: string;
  count: number;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ className }) => {
  const [value, setValue] = useState(500); // Начальное значение для ползунка
  const [categories, setCategories] = useState<Category[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFiltersData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const products = response.data;

        const categoryCounts: { [key: string]: number } = {};
        const sizeCounts: { [key: string]: number } = {};

        products.forEach((product: any) => {
          if (categoryCounts[product.category]) {
            categoryCounts[product.category]++;
          } else {
            categoryCounts[product.category] = 1;
          }

          if (sizeCounts[product.size]) {
            sizeCounts[product.size]++;
          } else {
            sizeCounts[product.size] = 1;
          }
        });

        setCategories(
          Object.entries(categoryCounts).map(([name, count]) => ({
            name,
            count,
          }))
        );
        setSizes(
          Object.entries(sizeCounts).map(([name, count]) => ({ name, count }))
        );
      } catch (error) {
        console.error("Error fetching filter data:", error);
      }
    };

    fetchFiltersData();
  }, []);

  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category));
  };

  const handleSizeClick = (size: string) => {
    dispatch(setSize(size));
  };

  const handlePriceChange = (val: number) => {
    setValue(val);
  };

  const applyFilters = () => {
    dispatch(setPrice(value));
  };

  return (
    <Box
      className={className}
      width="310px"
      p="4"
      display="flex"
      flexDirection="column"
      minHeight="calc(100vh - 64px)"
    >
      <Box mb="6">
        <Text fontSize="xl" fontWeight="semibold" mb="4">
          Categories
        </Text>
        <ul>
          {categories.map((category) => (
            <li
              key={category.name}
              className="flex justify-between mb-2 cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="text-green-600 font-semibold">
                {category.name}
              </span>
              <span>({category.count})</span>
            </li>
          ))}
        </ul>
      </Box>

      <Box mb="6">
        <Text fontSize="xl" fontWeight="semibold" mb="4">
          Price Range
        </Text>
        <Box display="flex" justifyContent="space-between" mb="2">
          <Text fontSize="sm">${value}</Text>
          <Text fontSize="sm">$500</Text>
        </Box>
        <Slider
          aria-label="price-range"
          min={0}
          max={500}
          value={value}
          onChange={handlePriceChange}
          colorScheme="green"
        >
          <SliderTrack>
            <SliderFilledTrack bg="green.500" />
          </SliderTrack>
          <SliderThumb boxSize="24px" bg="green.500" />
        </Slider>
        <Button
          color="white"
          width="90px"
          backgroundColor="green.500"
          _hover={{ backgroundColor: "green.600" }}
          onClick={applyFilters}
        >
          Filter
        </Button>
      </Box>

      <Box mb="6">
        <Text fontSize="xl" fontWeight="semibold" mb="4">
          Size
        </Text>
        <ul>
          {sizes.map((size) => (
            <li
              key={size.name}
              className="flex justify-between mb-2 cursor-pointer"
              onClick={() => handleSizeClick(size.name)}
            >
              <span>{size.name}</span>
              <span>({size.count})</span>
            </li>
          ))}
        </ul>
      </Box>

      <Box mt="12" flex="1">
        <img
          src="./src/assets/images/super_sale.png"
          alt="Super Sale"
          className="w-[280px] h-[450px]"
        />
      </Box>
    </Box>
  );
};

export default FilterSidebar;
