import React from "react";
import { MyPageNav } from "./MypageNav";

const UserInfoPresentaion = ({ userinfo }) => {
  return (
    <>
    <MyPageNav />
      <img src={userinfo?.imageKey} alt="profile-img" />
      <span>
        address = {userinfo?.address} {userinfo?.address2}
      </span>
      <span>phoneNumber = {userinfo?.phoneNumber}</span>
      <button>
        Edit
      </button>
    </>
  );
};

export default UserInfoPresentaion;