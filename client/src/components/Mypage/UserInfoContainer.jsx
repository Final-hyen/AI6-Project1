import React, { useEffect, useState } from "react";
import UserInfoPresentaion from "./UserInfoPresentation";
import { axiosClient } from "../../utils/axiosClient";

const UserInfoContainer = () => {
  const [userInfo, setUserInfo] = useState({});

  const fetchData = async () => {
    try {
      const response = await axiosClient.get(`/userinfo`);
      return response.data.userinfo;
    } catch (err) {
      throw err;
    }
  };

  const usingData = async () => {
    try {
      const userinfo = await fetchData();
      setUserInfo(userinfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    usingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UserInfoPresentaion userinfo={userInfo} />;
};

export default UserInfoContainer;
// useEffect(() => {
//   axiosClient
//     .get(`/userinfo`)
//     .then((res) => {
//       setUserInfo(res.data.userinfo);
//     })
//     .catch((e) => console.log(e));
// },[]);
