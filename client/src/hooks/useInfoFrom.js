import { useState } from "react";

export const useInfoForm = () => {
    const [infoData, setInfoData] = useState({
        address: "",
        address2:"",
        phoneNumber:"",
    });
    const handleChange = (e) => {
        setInfoData({...infoData, [e.target.id]:e.target.value})
    };
    return {infoData, handleChange}
}