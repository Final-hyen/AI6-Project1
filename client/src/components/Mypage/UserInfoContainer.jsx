import React, { useEffect, useState } from "react";
import UserInfoPresentaion from "./UserInfoPresentation";
import { axiosClient } from "../../utils/axiosClient";

const UserInfoContainer = () => {
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    axiosClient
      .get(`/userinfo`)
      .then((res) => {
        setUserInfo(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  },[]);
  return <UserInfoPresentaion userinfo={userInfo} />;
};

export default UserInfoContainer;
