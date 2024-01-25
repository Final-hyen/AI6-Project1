import React from "react";
import {
  Container,
  Status,
  ProductImg,
  Descriptions,
  Button,
} from "./TotalCSS";

const TotalTrackingPresentation = ({ orders }) => {
  return (
    <>
      <h3>[ 주문/배송 조회 ]</h3>
      {orders.map((order, idx) => (
        <Container key={idx}>
          <span className="date">{order.create_at}</span>
          {order.product_info.map((product, idx) => (
            <>
              <Status key={idx}>
                <ProductImg
                  className="img"
                  src={product.imgUrl}
                  alt="Product Img"
                />
                <Descriptions>
                  <span>Title : {product.title}</span>
                  <span>Price : {product.price}</span>
                </Descriptions>
              </Status>
              <hr />
            </>
          ))}
          <Button>배송 조회</Button>
        </Container>
      ))}
    </>
  );
};

export default TotalTrackingPresentation;
