import React, { useState } from "react";
import UserinfoEditPresent from "./UserInfoEditPresent";
import { useInfoForm } from "../../hooks/useInfoFrom";
import { isInfo } from "../../utils/validation";
//import { useNavigate } from "react-router-dom";

const UserinfoEditContain = () => {
  const [enroll, setEnroll] = useState({addressData: ''});
  const [isPopup, setIsPopup] = useState(false);
  //const navigate = useNavigate();
  const {
    infoData: { address, address2, phoneNumber },
    handleChange,
  } = useInfoForm();

  const onPopButton = (e) => {
    e.preventDefault();
    setIsPopup(!isPopup);
  };

  return (
    <UserinfoEditPresent
      address={address}
      address2={address2}
      phoneNumber={phoneNumber}
      handleChange={handleChange}
      validation={isInfo}
      onPopupButton={onPopButton}
      isPopup={isPopup}
      setIsPopup={setIsPopup}
      enroll={enroll}
      setEnroll={setEnroll}
    />
  );
};

export default UserinfoEditContain;
