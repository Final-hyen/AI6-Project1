import React from "react";
import { OrderStatus} from "./OrderTrackingCSS";

const TotalTrackingPresentation = ({ orders }) => {
  return (
    <>
      <h3>[ 주문/배송 조회 ]</h3>
      {orders.map((order, idx) => (
        <OrderStatus key={idx}>
           <span>{order.create_at}</span>
           {order.product_info.map((product,dix) =>(
            <div key={idx}>
                <img src={product.imgUrl} alt="Product Img"/>
            </div>
           ))}
        </OrderStatus>
      ))}
      
    </>
  );
};

export default TotalTrackingPresentation;
