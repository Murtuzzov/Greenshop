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

const FilterSidebar = () => {
  const [value, setValue] = useState(39);

  return (
    <Box width="310px" p="4">
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
      <Box>
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
    </Box>
  );
};

export default FilterSidebar;
