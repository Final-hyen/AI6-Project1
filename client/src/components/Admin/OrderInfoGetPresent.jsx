import React from "react";
import {
  OrderGetButton,
  Caption,
  Img,
  Table,
  Td,
  Th,
  ButtonDiv,
  H1,
} from "./ProductGetCSS";

const OrderGetPresent = ({ ordersInfo, onClcikCompleted, onClickdelivery }) => {
  return (
    <>
      <H1>Order Tracking</H1>
      {ordersInfo.map((orders, idx) => (
        <Table key={idx}>
          <Caption>주문번호 : {orders["order_no"]}</Caption>
          <thead>
            <tr>
              <Th>제품 사진</Th>
              <Th>주문 날짜</Th>
              <Th>주문자</Th>
              <Th>제품 이름</Th>
              <Th>주문 수량</Th>
              <Th>제품 가격</Th>
              <Th>Order Control</Th>
            </tr>
          </thead>
          <tbody>
            {orders["product_info"].map((order, orderIdx) => (
              <tr key={orderIdx}>
                <Td id="img">
                  <Img src={order["imgUrl"]} alt="주문 제품 이미지" />
                </Td>
                <Td>{orders["create_at"]}</Td>
                <Td>{orders["user_name"]}</Td>
                <Td id="title">{order["title"]}</Td>
                <Td id="count">{order.count}</Td>
                <Td id="price">{order.price}원</Td>
                <Td>
                  <ButtonDiv>
                    <OrderGetButton className="orderControll-1" id={orders["order_no"]}>
                      배송 준비 중
                    </OrderGetButton>
                    <OrderGetButton
                      className="orderControll-2"
                      status={orders['order_status']}
                      id={orders["order_no"]}
                      onClick={onClickdelivery}
                    >
                      배송 중
                    </OrderGetButton>
                    <OrderGetButton
                      className="orderControll-3"
                      id={orders["order_no"]}
                      status={orders['order_status']}
                      onClick={onClcikCompleted}
                    >
                      배송 완료
                    </OrderGetButton>
                  </ButtonDiv>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </>
  );
};

export default OrderGetPresent;
