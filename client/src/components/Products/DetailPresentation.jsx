import React from "react";
import {
  Contain,
  ProductNav,
  ProductWrap,
  Product,
  Button,
} from "./productDetailCSS";

const DetailPresentation = ({ product }) => {
  return (
    <Contain>
      <ProductNav>
        <a href="/">Home</a> /
        <a href={`/${product.category}`}> {product.category}</a>
      </ProductNav>
      <ProductWrap>
        <img src={product.imgUrl} alt="상품 이미지" />
        <Product>
          <h1>{product.title}</h1>
          <div>{product.company}</div>
          <span>{product.price}원</span>
          <h2>PRODCUT INFO</h2>
          <div>{product.description}</div>
          <Button className="cart">Add Cart</Button>
          <Button className="buy">Buy Now</Button>
        </Product>
      </ProductWrap>
    </Contain>
  );
};

export default DetailPresentation;
