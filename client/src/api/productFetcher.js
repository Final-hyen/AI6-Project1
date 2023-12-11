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
  user_id,
  user_name,
  user_phone,
  user_address,
  product,
  total_price
) => {
  return await axiosClient.post(`/order`, {
    user_id: user_id,
    user_name: user_name,
    user_phone: user_phone,
    user_address,
    product: product,
    total_price: total_price
  })
};
