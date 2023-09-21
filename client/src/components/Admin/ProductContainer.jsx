import React, { useState, useEffect } from "react";
import AdminProductPresentation from "./ProductPresentation";
import { axiosClient } from "../../utils/axiosClient";
import { useNavigate } from "react-router-dom";

const AdminGetProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onDeleteClick = async (e) => {
    await axiosClient
      .delete(`/products/${e.target.id}`)
      .then((res) => {
        alert(res.data.message);
        window.location.href = "/product";
      })
      .catch((e) => console.log(e.message));
  };

  const onViewClick = (e) => {
    e.preventDefault();
    navigate(`/detail/${e.target.id}`);
  };

  const onEditClick = (e) => {
    e.preventDefault();
    navigate(`/productedit/${e.target.id}`);
  };
  return (
    <AdminProductPresentation
      products={products}
      onDeleteClick={onDeleteClick}
      onEditClick={onEditClick}
      onViewClick={onViewClick}
    />
  );
};

export default AdminGetProducts;
