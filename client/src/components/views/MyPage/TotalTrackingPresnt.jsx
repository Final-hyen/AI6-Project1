import React from "react";
import {
  Container,
  Status,
  ProductImg,
  Descriptions,
  Button,
  Case,
  Unordered,
  List,
  Line,
} from "./TotalCSS";

const TotalTrackingPresentation = ({ orders, clickOpenButton, isOpen }) => {
  return (
    <>
      <h3>[ 주문/배송 조회 ]</h3>
      <Unordered>
        {orders.map((order, idx) => (
          <List key={idx}>
            {order.product_info.length === 1 ? (
              <>
                <Case>총 {order.product_info.length}건</Case>
                <Status>
                  <ProductImg
                    className="img"
                    src={order.product_info[0].imgUrl}
                    alt="Product Img"
                  />
                  <Descriptions>
                    <span className="date">{order.create_at}</span>
                    <span>{order.product_info[0].title}</span>
                    <span>{order.product_info[0].price}</span>
                    <a href="/">결제상세</a>
                  </Descriptions>
                </Status>
              </>
            ) : (
              <>
                {!isOpen ? (
                  <>
                    <Case>총 {order.product_info.length}건</Case>
                    <Status>
                      <ProductImg
                        className="img"
                        src={order.product_info[0].imgUrl}
                        alt="Product Img"
                      />
                      <Descriptions>
                        <span className="date">{order.create_at}</span>
                        <span>{order.product_info[0].title}</span>
                        <span>{order.total_price}</span>
                        <a href="/">주문상세</a>
                      </Descriptions>
                    </Status>
                    <Button className="toggle" onClick={clickOpenButton}>
                      {isOpen ? `총 ${order.product_info.length}건 접기` : `총 ${order.product_info.length}건 펼쳐보기`}
                    </Button>
                  </>
                ) : (
                  <>
                    {order.product_info.map((product, idx) => (
                      <li key={idx}>
                        <Case>{order.order_status}</Case>
                        <Status>
                          <ProductImg
                            className="img"
                            src={product.imgUrl}
                            alt="Product Img"
                          />
                          <Descriptions>
                            <span className="date">{order.create_at}</span>
                            <span>{product.title}</span>
                            <span>{product.price}</span>
                            <Button className="detail">배송 조회</Button>
                          </Descriptions>
                        </Status>
                        <Line></Line>
                      </li>
                    ))}
                    <Line></Line>
                    <Button className="toggle" onClick={clickOpenButton}>
                      {isOpen ? `총 ${order.product_info.length}건 접기` : `총 ${order.product_info.length}건 펼쳐보기`}
                    </Button>
                  </>
                )}
              </>
            )}
          </List>
        ))}
      </Unordered>
    </>
  );
};

export default TotalTrackingPresentation;
