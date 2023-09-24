import React from "react";
import {
  Contain,
  ProductNav,
  Product,
  Button,
} from "../Products/productDetailCSS";
import { ProductEditForm, Label, ProductInput } from "../Admin/ProductCSS";

const EditPresentation = ({ product, onClickEdit, handleChange }) => {
  return (
    <Contain>
      <ProductNav>
        <a href="/">Home</a> /
        <a href={`/${product.category}`}>{product.category}</a>
      </ProductNav>
      <ProductEditForm onSubmit={onClickEdit}>
        <img src={product.imgUrl} alt="상품 이미지" />
        <Product>
          <Label>Title</Label>
          <ProductInput
            id="title"
            type="string"
            defaultValue={product.title}
            onChange={handleChange}
          />
          <Label>Company</Label>
          <ProductInput
            id="company"
            type="string"
            defaultValue={product.company}
            onChange={handleChange}
          />
          <Label>Price</Label>
          <ProductInput
            id="price"
            type="number"
            defaultValue={product.price}
            onChange={handleChange}
          />
          <Label>Description</Label>
          <ProductInput
            id="description"
            type="string"
            defaultValue={product.description}
            onChange={handleChange}
          />
          <Button>complete</Button>
        </Product>
      </ProductEditForm>
    </Contain>
  );
};

export default EditPresentation;
