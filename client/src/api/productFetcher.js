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
  },);
};
