import React from "react";
import { Table } from "./CartCSS";
import { MyPageNav } from "../Mypage/MypageNav";

const CartPresentation = ({ cartItems }) => {
  return (
    <>
      <MyPageNav />
      <Table>
        <table>
          <thead>
            <tr>
              <td>Product Img</td>
              <td>Product Name</td>
              <td>Count</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <img src={item.imgUrl} alt="제품 사진" />
                </td>
                <td>{item.title}</td>
                <td>1</td>
                <td>{item.price}원</td>
              </tr>
            ))}
            <tr>
              <td>
                <button>Delete</button>
              </td>
              <td>Total원</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </>
  );
};

export default CartPresentation;
