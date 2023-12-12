import { axiosClient } from "../utils/axiosClient";

export const ProductPost = async (
  title,
  description,
  category,
  price,
  company
) => {
  return await axiosClient.post("/products", {
    title: title,
    description: description,
    category: category,
    price: price,
    company: company,
  });
};

export const ProductEdit = async (
  title,
  description,
  category,
  price,
  company,
  id
) => {
  return await axiosClient.put(`/products/${id}`, {
    title: title,
    description: description,
    category: category,
    price: price,
    company: company,
  });
};

export const Order = async (
  product_info,
  total_price
) => {
  return await axiosClient.post(`/orders`, {
    product_info: product_info,
    total_price: total_price
  })
};
