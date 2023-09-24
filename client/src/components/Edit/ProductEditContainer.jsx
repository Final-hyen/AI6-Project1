import React, { useState, useEffect } from "react";
import EditPresentation from "./ProductEditPresentation";
import { ProductEdit } from "../../api/productFetcher";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";

const EditContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axiosClient
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onClickEdit = async (e) => {
    e.preventDefault();

    try {
      const res = await ProductEdit(
        product.title,
        product.description,
        product.category,
        product.price,
        product.company,
        id
      );
      if ( res?.status === 200) {
        alert(res.data.message);
        navigate(`/detail/${id}`)
      } 
    } catch (err) {
      alert(err);
    }
  };
  return (
    <EditPresentation
      product={product}
      onClickEdit={onClickEdit}
      handleChange={handleChange}
    />
  );
};

export default EditContainer;
