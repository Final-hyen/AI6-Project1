import React, { useEffect, useState } from "react";
import { Table, Caption, Td, Th, Button, Img } from "./productTableCSS";
import { axiosClient } from "../../utils/axiosClient";

const ProductTable = () => {
  const [product, setProduct] = useState([]);
  
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
  console.log(product)
  const onDeleteClick = async (e) => {
    await axiosClient
      .delete(`/products/${e.target.id}`)
      .then((res) => {
        alert(res.data.message);
        window.location.href = "/product"
      })
      .catch((e) => console.log(e.message));
  };
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
              <Button className="view">view</Button>
              <Button id={product._id} className="delete" onClick={onDeleteClick}>
                Delete
              </Button>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
