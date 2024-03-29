import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageSlider = ({ images, address}) => {
  const [curImg, setCurImg] = useState(0);
  const [curAdd, setCurAdd] = useState(0);

  useEffect(() => {
    const timer = setInterval(changeImg, 3000);
    return () => {
        clearInterval(timer);
    }
  });

  const changeImg = () => {
    setCurImg((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setCurAdd((prevIndex) => 
      prevIndex === address.length -1 ? 0 : prevIndex +1
    )
  };
  

  return (
    <>
        <a href={address[curAdd]}>
          <picture>
            <source srcSet={images[curImg]} type="image/webp"/>
            <SlideImg src={images[curImg]} alt='Slider' />
          </picture>
        </a>
    </>
  )
};

export default ImageSlider;

const SlideImg = styled.img`
    width: 1280px;
    height: 640px;
`