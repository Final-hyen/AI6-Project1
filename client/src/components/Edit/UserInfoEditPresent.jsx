import React from "react";
import { Form, InputBox, Input, Button } from "../Auth/AuthForm.style";
import { MyPageNav } from "../Mypage/MypageNav";
import AddressPopup from "../Mypage/address";
const UserinfoEditPresent = ({
  address,
  address2,
  phoneNumber,
  handleChange,
  validation,
  onPopupButton,
  isPopup,
  setIsPopup,
  enroll,
  setEnroll,
  handleSubmit,
}) => {
  return (
    <>
      <MyPageNav />
      <Form onSubmit={handleSubmit}>
        <InputBox>
          <span>Address</span>
          <button onClick={onPopupButton}>주소 찾기</button>
          {isPopup && (
            <AddressPopup
              data={enroll}
              setData={setEnroll}
              setIsPopup={setIsPopup}
            ></AddressPopup>
          )}
          <Input
            id="address"
            onChange={handleChange}
            value={enroll.address}
            placeholder={enroll.address}
            type="text"
            readOnly={true}
          />
          <span>Detailed address</span>
          <Input
            id="address2"
            onChange={handleChange}
            type="text"
            value={address2}
          />
          <span>Phone Number ( - 포함 ) </span>
          <Input
            id="phoneNumber"
            onChange={handleChange}
            type="text"
            value={phoneNumber}
          />
        </InputBox>
        <Button
          //disabled={!validation(address2, phoneNumber)}
        >
          Edit
        </Button>
      </Form>
    </>
  );
};

export default UserinfoEditPresent;
