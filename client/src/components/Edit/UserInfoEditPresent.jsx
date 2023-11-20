import React from "react";
import { Form, InputBox, Input, Button } from "../Auth/AuthForm.style";
import { MyPageNav } from "../Mypage/MypageNav";
const UserinfoEditPresent = ({
  address,
  address2,
  phoneNumber,
  handleChange,
  validation
}) => {
  return (
    <>
      <MyPageNav />
      <Form>
        <InputBox>
          <span>Address</span>
          <Input
            id="address"
            onChange={handleChange}
            type="text"
          />
          <span>Detailed address</span>
          <Input
            id="address2"
            onChange={handleChange}
            type="text"
          />
          <span>Phone Number ( - 포함 )</span>
          <Input
            id="phoneNumber"
            onChange={handleChange}
            type="text"
          />
        </InputBox>
        <Button disabled={!validation(address, address2, phoneNumber)}>Edit</Button>
      </Form>
    </>
  );
};

export default UserinfoEditPresent;
