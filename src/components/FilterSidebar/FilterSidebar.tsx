import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";

interface FilterSidebarProps {
  className?: string; // className опционален
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ className }) => {
  const [value, setValue] = useState(39);

  return (
    <Box
      className={className}
      width="310px"
      p="4"
      display="flex"
      flexDirection="column"
      minHeight="calc(100vh - 64px)"
    >
      {/* Categories */}
      <Box mb="6">
        <Text fontSize="xl" fontWeight="semibold" mb="4">
          Categories
        </Text>
        <ul>
          <li className="flex justify-between mb-2 text-green-600 font-semibold">
            <span>House Plants</span>
            <span>(33)</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Potter Plants</span>
            <span>(12)</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Seeds</span>
            <span>(65)</span>
          </li>
        </ul>
      </Box>

      {/* Price Range */}
      <Box mb="6">
        <Text fontSize="xl" fontWeight="semibold" mb="4">
          Price Range
        </Text>
        <Box display="flex" justifyContent="space-between" mb="2">
          <Text fontSize="sm">${value}</Text>
          <Text fontSize="sm">$1230</Text>
        </Box>
        <Slider
          aria-label="price-range"
          min={39}
          max={1230}
          value={value}
          onChange={(val) => setValue(val)}
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
        >
          Filter
        </Button>
      </Box>

      {/* Size */}
      <Box mb="6">
        <Text fontSize="xl" fontWeight="semibold" mb="4">
          Size
        </Text>
        <ul>
          <li className="flex justify-between mb-2">
            <span>Small</span>
            <span>(119)</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Medium</span>
            <span>(86)</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Large</span>
            <span>(78)</span>
          </li>
        </ul>
      </Box>

      {/* Promo Image */}
      <Box mt="12" flex="1">
        <img
          src="./src/assets/images/super_sale.png"
          alt="Super Sale"
          className="w-[280px] h-[450px]" // Изображение будет растягиваться на всю высоту и ширину контейнера
        />
      </Box>
    </Box>
  );
};

export default FilterSidebar;
