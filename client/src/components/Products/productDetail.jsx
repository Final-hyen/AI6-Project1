import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import { Link, useParams } from "react-router-dom";

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
  console.log(product)
  return (
    <>
      <div>
        <a href="/">Home</a> /
        <Link to={`/${product.category}`}> {product.category}</Link>
      </div>
      <div>
        <img src={product.imgUrl} />
        <div>
            <h1>{product.title}</h1>
            <div>{product.company}</div>
            <span>{product.price}원</span>
            <h2>PRODCUT INFO</h2>
            <div>{product.description}</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
