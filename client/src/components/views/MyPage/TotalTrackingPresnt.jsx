import React from "react";
import {
  Container,
  Status,
  ProductImg,
  Descriptions,
  Button,
  Case,
} from "./TotalCSS";

const TotalTrackingPresentation = ({ orders, clickOpenButton, isOpen }) => {
  return (
    <>
      <h3>[ 주문/배송 조회 ]</h3>
      {orders.map((order, idx) => (
        <Container key={idx}>
          <Case>총 {order.product_info.length}건</Case>
          {order.product_info.length === 1 ? (
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
          ) : (
            <>
              {!isOpen ? (
                <>
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
                  <Button className="Toggle" onClick={clickOpenButton}>
                    {isOpen ? "접기" : "펼쳐보기"}
                  </Button>
                </>
              ) : (
                <>
                  {order.product_info.map((product, idx) => (
                    <Status key={idx}>
                      <ProductImg
                        className="img"
                        src={product.imgUrl}
                        alt="Product Img"
                      />
                      <Descriptions>
                        <span className="date">{order.create_at}</span>
                        <span>{product.title}</span>
                        <span>{product.price}</span>
                        <Button>배송 조회</Button>
                      </Descriptions>
                    </Status>
                  ))}
                  <Button className="Toggle" onClick={clickOpenButton}>
                    {isOpen ? "접기" : "펼쳐보기"}
                  </Button>
                </>
              )}
            </>
          )}
        </Container>
      ))}
    </>
  );
};

export default TotalTrackingPresentation;
