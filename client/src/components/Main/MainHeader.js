import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";


function Header() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role')

  const LogoutHandler = async (e) => {
    e.preventDefault();
    await axiosClient
      .get("/signout", { withCredentials: true })
      .then((res) => {
        localStorage.clear()
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImgBlock src="https://cdn.discordapp.com/attachments/1065825998043631636/1069539124203241502/001.png" alt="헤더 이미지" loading="lazy"/>
        <LogoLink to="/">9UCCI</LogoLink>
        <StyledNav>
          {(role === '0' || !role) && (
            <>
              <JoinLink to="/join">JOIN</JoinLink>
              <LoginLink to="/login">LOGIN</LoginLink>
              <CartLink to="/cart">CART</CartLink>
            </>
          )}
          {role === '1' && (
            <>
              <StyledButton onClick={LogoutHandler}>LOGOUT</StyledButton>
              <MypageLink to="/mypage">MY PAGE</MypageLink>
            </>
          )}
          {role === '2' && (
            <>
              <AdminLink to="/admin">ADMIN</AdminLink>
              <StyledButton onClick={LogoutHandler}>LOGOUT</StyledButton>
            </>
          )}
        </StyledNav>
        <StyledCategory>
          <TopLink to="/top">TOP</TopLink>
          <Link to="/bottom">BOTTOM</Link>
          <OuterLink to="/outer">OUTER</OuterLink>
        </StyledCategory>
      </div>
    </>
  );
}

export default Header;
const ImgBlock = styled.img`
  width: 100%;
  height: 28vh;
  object-fit: cover;
  filter: brightness(65%);
`;
const LogoLink = styled(Link)`
  position: absolute;
  width: 3em;
  height: 200px;

  font-style: normal;
  font-weight: 700;
  font-size: 4.5em;

  text-align: center;
  text-decoration: none;
  color: #ffffff;
`;
const StyledNav = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 15em;
  a {
    text-decoration: none;
    color: #ffffff;

    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
  }

  button {
    border: none;
    background-color: transparent;

    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    color: #ffffff;
  }
`;
const JoinLink = styled(Link)`
  margin-right: 4em;
  width: 4em;
  height: 2em;
`;

const LoginLink = styled(Link)`
  margin-right: 4em;
  width: 4em;
  height: 2em;
`;
const AdminLink = styled(Link)`
  margin-right: 1.5em;
  width: 4em;
  height: 2em;
`;
const MypageLink = styled(Link)`
  width: 6em;
  height: 2em;
`;
const CartLink = styled(Link)`
  margin-right: 2em;
  width: 4em;
  height: 2em;
`;
const StyledCategory = styled.div`
  position: absolute;
  margin-top: 15em;
  margin-bottom: 1em;
  display: table;
  width: 100%;
  height: 5vh;

  a {
    display: table-cell;
    vertical-align: middle;
    text-decoration: none;
    color: #ffffff;

    font-weight: 700;
    font-size: 2em;
    text-align: center;
  }
`;
const TopLink = styled(Link)`
  padding-left: 1em;
  padding-right: 0.4em;
`;

const OuterLink = styled(Link)``;

const StyledButton = styled.button`
  width: 4em;
  height: 1.5em;

  margin-right: 2em;

  cursor: pointer;
`;
