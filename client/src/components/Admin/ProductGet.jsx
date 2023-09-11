import React from "react";
import { ProductForm, ProductInput, Button, Label } from "./ProductCSS";
import { useProductForm } from "../../hooks/useProductFrom";
import { ProductPost } from "../../api/productFetcher";
import { useNavigate } from "react-router-dom";
const PostProduct = () => {
  const {
    productData: { title, description, category, price, company },
    handleChange,
  } = useProductForm();

  const navigate = useNavigate();

  const onClickPost = async (e) => {
    e.preventDefault();

    await ProductPost(title, description, category, price, company)
      .then((res) => {
        if (res?.status === 201) {
          alert(res.data.message);
          navigate('product')
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <ProductForm onSubmit={onClickPost}>
      <Label>Product Name</Label>
      <ProductInput
        id="title"
        type="string"
        placeholder="Product Name"
        onChange={handleChange}
      ></ProductInput>
      <Label>Product Description</Label>
      <ProductInput
        id="description"
        type="string"
        placeholder="Product Description"
        onChange={handleChange}
      ></ProductInput>
      <Label>Product Category</Label>
      <ProductInput
        id="category"
        type="string"
        placeholder="Product Category"
        onChange={handleChange}
      ></ProductInput>
      <Label>Product Price</Label>
      <ProductInput
        id="price"
        type="Number"
        placeholder="Product Price"
        onChange={handleChange}
      ></ProductInput>
      <Label>Product Company</Label>
      <ProductInput
        id="company"
        type="string"
        placeholder="Product Company"
        onChange={handleChange}
      ></ProductInput>
      <Button>Product Post</Button>
    </ProductForm>
  );
};

export default PostProduct;
