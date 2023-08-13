import { useState } from "react";

export const useAuthForm = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleChange = (e) => {
    setAuthData({...authData, [e.target.id]:e.target.value})
  };
  return {authData, handleChange}
};
