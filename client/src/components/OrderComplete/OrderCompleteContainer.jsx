import React from "react";
import { useNavigate } from "react-router-dom";
import CompletePresentation from "./OrderCompletePresentation";

const CompleteContainer = () => {
  const navigate = useNavigate();

  const clickShoppingButton = () => {
    navigate("/");
  };

  const clickCheckButton = () => {
    navigate("/ordertracking");
  };
  return (
    <CompletePresentation
      clickShoppingButton={clickShoppingButton}
      clickCheckButton={clickCheckButton}
    />
  );
};

export default CompleteContainer;