import React, { useEffect, useState } from "react";
import DetailPresentation from "./DetailPresentation";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";

const DetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const CartProduct = JSON.parse(localStorage.getItem('cartItems')) || [];

  const onCartClick = () => {
    alert("Add to cart completed");
    CartProduct.push(product);
    localStorage.setItem('cartItems', JSON.stringify(CartProduct));
  }

  useEffect(() => {
    axiosClient
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return <DetailPresentation product={product} onCartClick={onCartClick}/>;
};

export default DetailContainer;

// const clickCartHandler = () => {
//   alert("장바구니 담기 완료!")
//   const savedCartList = localStorage.getItem(CARTLIST_KEY)
//       //'elice_wishlist' 값 가져오고
//   const cartList = savedCartList ? JSON.parse(savedCartList) : []
//       //wishList 는 elice_wishlist 있으면 JSON.parse 아니면 빈배열로 data.push
//   cartList.push(data)
//   localStorage.setItem(CARTLIST_KEY, JSON.stringify(cartList));
//   //push 후 'elice_wishlist'로 다시 setItem
// }