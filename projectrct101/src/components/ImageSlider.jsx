import React, { useState } from "react";
import { Box, Flex, IconButton, Image, useMediaQuery } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const images = [
  {
    id: 1,
    src: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3595269.json?$Prod_PLPThumb$",
  },
  {
    id: 2,
    src: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2791055.json?$Prod_PLPThumb$",
  },
  {
    id: 3,
    src: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3415441.json?$Prod_PLPThumb$",
  },
  {
    id: 4,
    src: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2918525.json?$Prod_PLPThumb$",
  },
  {
    id: 5,
    src: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2685504.json?$Prod_PLPThumb$",
  },
  {
    id: 6,
    src: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2326632.json?$Prod_PLPThumb$",
  },
  {
    id: 7,
    src: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2874877.json?$Prod_PLPThumb$0",
  },
  {
    id: 8,
    src: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2425566.json?$Prod_PLPThumb$",
  },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="100%"
      px={isMobile ? "0" : "10"}
    >
      <IconButton
        aria-label="previous"
        icon={<ChevronLeftIcon />}
        onClick={handlePrev}
        zIndex={10}
        size="lg"
        borderRadius="full"
        position="absolute"
        left="2"
        bg="white"
        boxShadow="base"
      />
      <Box
        w="100%"
        h={isMobile ? "200px" : "400px"}
        overflow="hidden"
        position="relative"
        sx={{
          ".slider": {
            display: "flex",
            transition: "transform 0.3s ease-out",
            transform: `translateX(-${(index * 100) / images.length}%)`,
            width: `${images.length * 25}%`,
            gap:"5px",
            cursor:"pointer",
            shadow:"box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          },
          ".slide": {
            flex: "0 0 auto",
            width: `${100 / images.length}%`,
          },
        }}
      >
        <Flex className="slider">
          {images.map((image) => (
            <Box key={image.id} className="slide">
              <Image
                src={image.src}
                alt={image.id}
                h={isMobile ? "200px" : "400px"}
                w="500px"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      </Box>
      <IconButton
        aria-label="next"
        icon={<ChevronRightIcon />}
        onClick={handleNext}
        zIndex={10}
        size="lg"
        borderRadius="full"
        position="absolute"
        right="2"
        bg="white"
        boxShadow="base"
      />
    </Flex>
  );
};

export default ImageSlider;

