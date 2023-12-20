import React from "react";
import { Button, Caption, Img, Table, Td, Th } from "./ProductGetCSS";

const OrderGetPresent = ({ ordersInfo }) => {
  return (
    <>
      <h2>Order Tracking</h2>
      {ordersInfo.map((orders, idx) => (
        <Table key={idx}>
          <Caption>{orders['create_at']}</Caption>
          <thead>
            <tr>
              <Th>제품 사진</Th>
              <Th>제품 이름</Th>
              <Th>주문 수량</Th>
              <Th>제품 가격</Th>
              <Th>Order Control</Th>
            </tr>
          </thead>
          <tbody>
              {orders['product_info'].map((order, orderIdx) => (
                <tr key={orderIdx}>
                  <Td id="img">
                    <Img src={order["imgUrl"]} alt="주문 제품 이미지" />
                  </Td>
                  <Td id="title">{order["title"]}</Td>
                  <Td id="count">{order.count}</Td>
                  <Td id="price">{order.price}원</Td>
                  <Td>
                    <Button>배송 준비 중</Button>
                    <Button>배송 중</Button>
                    <Button>배송 완료</Button>
                  </Td>
                </tr>
              ))
            }
            
          </tbody>
        </Table>
      ))}
    </>
  );
};

export default OrderGetPresent;
