import React from "react";
import UserinfoEditPresent from "./UserInfoEditPresent";
import { useInfoForm } from "../../hooks/useInfoFrom";
import { isInfo } from "../../utils/validation";

const UserinfoEditContain = () => {
    const {
        infoData: { address, address2, phoneNumber },
        handleChange,
    } = useInfoForm();

    
    return <UserinfoEditPresent address={address} address2={address2} phoneNumber={phoneNumber} handleChange={handleChange} validation={isInfo}/>
}

export default UserinfoEditContain