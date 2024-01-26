import React from "react";
import {
  Container,
  Status,
  ProductImg,
  Descriptions,
  Button,
} from "./TotalCSS";

const TotalTrackingPresentation = ({ orders, clickOpenButton }) => {
  return (
    <>
      <h3>[ 주문/배송 조회 ]</h3>
      {orders.map((order, idx) => (
        <Container key={idx}>
          <span>총 {order.product_info.length}건</span>
          {order.product_info.map((product, idx) => (
            <Status key={idx}>
              {order.product_info.length === 1 ? 
                <>
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
                </>
               : 
                <>
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
                    <Button onClick={clickOpenButton}>펼쳐 보기</Button>
                  </Descriptions>
                </>
              }
            </Status>
          ))}
        </Container>
      ))}
    </>
  );
};

export default TotalTrackingPresentation;
