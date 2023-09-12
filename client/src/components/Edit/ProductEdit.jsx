import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Contain,
  ProductNav,
  Product,
  Button,
} from "../Products/productDetailCSS";
import { ProductEditForm, Label, ProductInput } from "../Admin/ProductCSS";
import { ProductEdit } from "../../api/productFetcher";

const ProductEditPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({...product, [e.target.id]: e.target.value})
  }
  useEffect(() => {
    axiosClient
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const onClickEdit = async (e) => {
    e.preventDefault();
  
    await ProductEdit(product.title, product.description, product.category, product.price, product.company, id)
      .then((res) => {
        if (res?.status === 200) {
          alert(res.data.message);
          navigate(`/detail/${id}`)
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Contain>
      <ProductNav>
        <a href="/">Home</a> /
        <Link to={`/${product.category}`}> {product.category}</Link>
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

export default ProductEditPage;
