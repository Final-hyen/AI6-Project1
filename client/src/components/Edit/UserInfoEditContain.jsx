import React, { useState } from "react";
import UserinfoEditPresent from "./UserInfoEditPresent";
import { useInfoForm } from "../../hooks/useInfoFrom";
import { axiosClient } from "../../utils/axiosClient";
import { useNavigate } from "react-router-dom";

const UserinfoEditContain = () => {
  const [enroll, setEnroll] = useState({address: ''});
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();
  
  const {
    infoData: { address, address2, phoneNumber },
    handleChange,
  } = useInfoForm();

  const onPopButton = (e) => {
    e.preventDefault();
    setIsPopup(!isPopup);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosClient.put('/userinfo', {address: enroll.address, address2, phoneNumber})
      if( res?.status === 200 ) {
        alert('Userinfo Update Successful');
        navigate('/mypage');
        console.log(res.data.userinfo.address)
      }
      console.log(res);
    } catch (err) {
      alert(err)
    }
  }
  
  
  return (
    <UserinfoEditPresent
      address={address}
      address2={address2}
      phoneNumber={phoneNumber}
      handleChange={handleChange}
      onPopupButton={onPopButton}
      isPopup={isPopup}
      setIsPopup={setIsPopup}
      enroll={enroll}
      setEnroll={setEnroll}
      handleSubmit={handleSubmit}
    />
  );
};

export default UserinfoEditContain;
