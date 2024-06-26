import React from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box position="relative" width="full" overflow="hidden">
      <Slider {...settings}>
        <Box height="60vh" display="flex" alignItems="center" justifyContent="center">
          <img src="/images/slide1.jpg" alt="Slide 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
        <Box height="60vh" display="flex" alignItems="center" justifyContent="center">
          <img src="/images/slide2.jpg" alt="Slide 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
        <Box height="60vh" display="flex" alignItems="center" justifyContent="center">
          <img src="/images/slide3.jpg" alt="Slide 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
      </Slider>
    </Box>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Next Slide"
      icon={<FaArrowRight />}
      position="absolute"
      right="20px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="2"
      onClick={onClick}
      bg="rgba(0, 0, 0, 0.5)"
      _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
      color="white"
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Previous Slide"
      icon={<FaArrowLeft />}
      position="absolute"
      left="20px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="2"
      onClick={onClick}
      bg="rgba(0, 0, 0, 0.5)"
      _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
      color="white"
    />
  );
};

export default HeroSlider;