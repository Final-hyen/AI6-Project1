import React from "react";
import { Table } from "./CartCSS";
import { MyPageNav } from "../Mypage/MypageNav";

const CartPresentation = ({
  cartItems,
  totalPrice,
  isChecked,
  isClickCheckAll,
}) => {
  return (
    <>
      <MyPageNav />
      <Table>
        <table>
          <thead>
            <tr>
              <td>
                <input
                  id="checkAll"
                  type="checkbox"
                  onChange={isClickCheckAll}
                  checked={isChecked}
                />
              </td>
              <td>Product Img</td>
              <td>Product Name</td>
              <td>Count</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
          {cartItems.length === 0 && (
            <tr>
              <td colSpan='5'>There are no products in your shopping cart.</td>
            </tr>
          )}
            {cartItems.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <input
                    id="chk"
                    type="checkbox"
                    checked={isChecked}
                    onChange={isClickCheckAll}
                  />
                </td>
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
              <td></td>
              <td></td>
              <td></td>
              <td>{totalPrice}원</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </>
  );
};

export default CartPresentation;