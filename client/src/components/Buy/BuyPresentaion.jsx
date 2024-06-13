import React from "react";
import { BuyPageBodyContainer, Letsbuy } from "./BuyCSS";
import { Table } from "../Cart/CartCSS";

const BuyPresentaion = ({ items, setItems, totalPrice, userinfo }) => {
  return (
    <BuyPageBodyContainer>
      <h3>[Buy Page] 주문결제 페이지</h3>
      <h5 className="UsIf">👤 주문자정보</h5>
      <div>
        {userinfo.phoneNumber} / {userinfo.address} / {userinfo.address2}
      </div>
      <h5 className="UsIf">📦 배송상품정보 </h5>
      <Table>
        <table>
          <thead>
            <td>Product Img</td>
            <td>Product Name</td>
            <td>Count</td>
            <td>Price</td>
          </thead>
          <tbody>
            {items.length > 1 ? (
              items.map((item, idx) => (
                <tr key={idx}>
                  <td><img src={item.imgUrl} alt="제품 사진" /></td>
                  <td>{item.title}</td>
                  <td>{item.count}</td>
                  <td>{item.price * item.count}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <img src={items.imgUrl} alt="product Img" />
                </td>
                <td>{items.title}</td>
                <td>1</td>
                <td>{items.price}</td>
              </tr>
            )}
          </tbody>
        </table>
      </Table>
      <h5 className="UsIf">💸 결제 금액</h5> <p>{totalPrice} 원</p>
      <Letsbuy>
        <button onClick={setItems}>결제하기</button>
      </Letsbuy>
    </BuyPageBodyContainer>
  );
};

export default BuyPresentaion;
