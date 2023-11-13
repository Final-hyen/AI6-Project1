import React from "react";
import {
  Contain,
  ProductNav,
  ProductWrap,
  Product,
  Button,
} from "./productDetailCSS";

const DetailPresentation = ({ product, onCartClick }) => {
  return (
    <Contain>
      <ProductNav>
        <a href="/">Home</a> /
        <a href={`/${product.category}`}> {product.category}</a>
      </ProductNav>
      <ProductWrap>
        <picture>
          <source srcSet={product.imgUrl} type="image/webp"/>
          <img src={product.imgUrl} alt="상품 이미지" loading="eager" />
        </picture>
        <Product>
          <h1>{product.title}</h1>
          <div>{product.company}</div>
          <span>{product.price}원</span>
          <h2>PRODCUT INFO</h2>
          <div>{product.description}</div>
          <Button className="cart" onClick={onCartClick}>Add Cart</Button>
          <Button className="buy">Buy Now</Button>
        </Product>
      </ProductWrap>
    </Contain>
  );
};

export default DetailPresentation;
