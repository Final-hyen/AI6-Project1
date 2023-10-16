import React from "react";
import { Table } from "./CartCSS";
import { MyPageNav } from "../Mypage/MypageNav";

const CartPresentation = ({
  cartItems,
  totalPrice,
  isChecked,
  isOneCheck,
  productCount,
  clickPlusHandler,
  clickMinusHandler,
  isAllCheck,
  isClickOneProductCheck,
  clickDeleteButton,
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
                  checked={isChecked}
                  onChange={isAllCheck}
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
                <td colSpan="5">
                  There are no products in your shopping cart.
                </td>
              </tr>
            )}
            {cartItems.length > 0 && (
              <>
                {cartItems.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <input
                        id="chk"
                        type="checkbox"
                        checked={isOneCheck[idx]}
                        onChange={() => isClickOneProductCheck(idx)}
                      />
                    </td>
                    <td>
                      <img src={item.imgUrl} alt="제품 사진" />
                    </td>
                    <td>{item.title}</td>
                    <td>
                      <button type="button" onClick={() => {clickMinusHandler(idx)}}> - </button>
                      &nbsp;
                      {productCount[idx]}
                      &nbsp;
                      <button type="button" onClick={() => {
                        clickPlusHandler(idx)
                      }}> + </button>
                    </td>
                    <td>{item.price * productCount[idx]}원</td>
                  </tr>
                ))}
              </>
            )}
            <tr>
              <td></td>
              <td>
                <button onClick={clickDeleteButton}>Delete</button>
              </td>
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
