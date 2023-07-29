import { useState } from "react";

const useAuthForm = () => {
  const [authData, setAuthData] = useState({
    email: "",
    passowrd: "",
    userName: "",
  });
  const handleChange = (e) => {
    setAuthData({...authData, [e.tartget.value]:e.target.value})
  }
};
