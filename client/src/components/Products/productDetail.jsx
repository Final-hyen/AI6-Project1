import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import { Link, useParams } from "react-router-dom";
import { Contain, ProductNav, ProductWrap, Product, Button } from "./productDetailCSS";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosClient
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <Contain>
      <ProductNav>
        <a href="/">Home</a> /
        <Link to={`/${product.category}`}> {product.category}</Link>
      </ProductNav>
      <ProductWrap>
        <img src={product.imgUrl} />
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

export default ProductDetail;
