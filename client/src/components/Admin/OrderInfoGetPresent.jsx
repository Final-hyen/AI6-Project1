import React from "react";

const OrderGetPresent = ({ orders }) => {
  return (
    <>
      <h2>Order Tracking</h2>
      {orders.map((order, idx) => (
        <div key={idx}>
          <span>{order['title']}</span>
        </div>
      ))}
    </>
  );
};

export default OrderGetPresent;
