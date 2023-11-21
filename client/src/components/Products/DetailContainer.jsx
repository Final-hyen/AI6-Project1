import React, { useEffect, useState } from "react";
import DetailPresentation from "./DetailPresentation";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useSetRecoilState } from "recoil";
import { cartItemAtom } from "../../recoil/atom";

const DetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  //const CartProduct = JSON.parse(localStorage.getItem('cartItems')) || [];
  const setCartItems = useSetRecoilState(cartItemAtom);
  const navigate = useNavigate()

  const onCartClick = () => {
    alert("Add to cart completed");
    const itemsData = {
      title: product.title,
      imgUrl: product.imgUrl,
      price: product.price,
    };
    setCartItems((prevItems) => {
      if (!Array.isArray(prevItems)) {
        prevItems = [];
      }
      return prevItems.concat(itemsData);
    });
    //localStorage.setItem('cartItems', JSON.stringify(CartProduct));
  };

  useEffect(() => {
    axiosClient
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const onBuyClick =  () => {
    alert("Go to BuyPage");
    const itemsData = {
      title: product.title,
      imgUrl: product.imgUrl,
      price: product.price,
    };
    localStorage.setItem('buyItem', JSON.stringify(itemsData));
    localStorage.setItem('href', window.location.href);
    navigate('/buypage')
  }

  return <DetailPresentation product={product} onCartClick={onCartClick} onBuyClick={onBuyClick} />;
};

export default DetailContainer;
