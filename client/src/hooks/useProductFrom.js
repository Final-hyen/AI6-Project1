import { useState } from "react";

export const useProductForm = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    company: "",
  });
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.id]: e.target.value });
  };
  return { productData, handleChange };
};
