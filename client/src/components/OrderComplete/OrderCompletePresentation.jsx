import React from "react";
import { Ordercomplete } from "./OrderCompleteCSS";

const CompletePresentation = ({ clickShoppingButton, clickCheckButton }) => {
  return (
    <Ordercomplete>
      <img
        className="checkcomplete"
        src="../../../data/completecheck.png"
        alt="주문완료체크이미지"
      />
      <h1>주문이 완료되었습니다!</h1>
      <button onClick={clickShoppingButton}>Go Shopping</button>
      <button onClick={clickCheckButton}>Check Order</button>
    </Ordercomplete>
  );
};

export default CompletePresentation;
