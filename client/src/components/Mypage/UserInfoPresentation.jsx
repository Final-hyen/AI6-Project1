import React from "react";
import { MyPageNav } from "./MypageNav";
import { Contain } from "./MyPageCSS";
import { Button } from "../Auth/AuthForm.style";
const UserInfoPresentaion = ({ userinfo, onEditButton }) => {
  return (
    <>
      <MyPageNav />
      <Contain>
        <img src={userinfo?.imageKey} alt="profile-img" loading="lazy" />
        <div>
          address = {userinfo?.address} {userinfo?.address2}
          <br />
          phoneNumber = {userinfo?.phoneNumber}
          <Button className="" onClick={onEditButton}>Edit</Button>
        </div>
      </Contain>
    </>
  );
};

export default UserInfoPresentaion;
