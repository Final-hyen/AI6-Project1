import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageSlider = ({ images }) => {
  const [curImg, setCurImg] = useState(0);

  const changeImg = () => {
    setCurImg((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(changeImg, 3000);
    return () => {
        clearInterval(timer);
    }
  }, []);

  return (
    <>
        <SlideImg src={images[curImg]} alt='Slider' />
    </>
  )
};

export default ImageSlider;

const SlideImg = styled.img`
    width: 80em;
    height: 50em;
`