import React, { useEffect, useState } from "react";
import { Table, Caption, Td, Th, Button, Img } from "./ProductGetCSS";
import { axiosClient } from "../../utils/axiosClient";
import { useNavigate } from "react-router-dom";

const ProductGet = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient
      .get("/products")
      .then((res) => {
        setProduct(res.data);
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
    e.preventDefault()
    navigate(`/productedit/${e.target.id}`)
  }
  return (
    <Table>
      <Caption>상품 조회</Caption>
      <thead>
        <tr>
          <Th>제품 사진</Th>
          <Th>제품 이름</Th>
          <Th>제품 설명</Th>
          <Th>제품 가격</Th>
          <Th>Control</Th>
        </tr>
      </thead>
      <tbody>
        {product.map((product, idx) => (
          <tr key={idx}>
            <Td id="img">
              <Img src={product.imgUrl} alt="img" />
            </Td>
            <Td id="title">{product.title}</Td>
            <Td id="description">{product.description}</Td>
            <Td id="price">{product.price}원</Td>
            <Td>
              <Button id={product._id} className="view" onClick={onViewClick}>
                view
              </Button>
              <Button id={product._id} className="edit" onClick={onEditClick}>
                Edit
              </Button>
              <Button
                id={product._id}
                className="delete"
                onClick={onDeleteClick}
              >
                Delete
              </Button>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductGet;
