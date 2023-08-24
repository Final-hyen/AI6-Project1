import React, { useEffect, useState } from "react";
import { Table, Caption, Td, Th, Button, Img } from "./productTableCSS";
import { axiosClient } from "../../utils/axiosClient";

const ProductTable = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/prodcucts")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);
  
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
            <Td>
              <Img src={product.imgUrl} alt="img" />
            </Td>
            <Td>{product.title}</Td>
            <Td>{product.description}</Td>
            <Td>{product.price}</Td>
            <Td>
              <Button className="view">view</Button>
              <Button className="delete">Delete</Button>
            </Td>
          </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default ProductTable;
