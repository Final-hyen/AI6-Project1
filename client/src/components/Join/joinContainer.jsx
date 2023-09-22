import React from "react";
import { useAuthForm } from "../../hooks/useAuthForm";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/authFetcher";
import { checkValidation } from "../../utils/validation";
import JoinPresentation from "./joinPresentaion";

const JoinContainer = () => {
  const {
    authData: { email, password, name },
    handleChange,
  } = useAuthForm();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password, name)
      .then((res) => {
        if (res?.status === 201) {
          alert("Welcome to 9UCCI");
          navigate("/login");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <JoinPresentation
      email={email}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      checkValidation={checkValidation}
    />
  );
};

export default JoinContainer;
