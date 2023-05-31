import React from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Header () {
    const isLogin = sessionStorage.getItem('user');
    const isAdmin = sessionStorage.getItem('admin')
    const navigate = useNavigate();
    const LogoutHandler = async() => {
        await axios.get(' http://localhost:5000/signout', {withCredentials : true})
          .then((res) => {console.log(res.data.cookies); navigate('/'); sessionStorage.clear()})
          .catch((err) => {console.log(err.message)})
      }
    
      return (
    <>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
            <ImgBlock src='https://cdn.discordapp.com/attachments/1065825998043631636/1069539124203241502/001.png' />
            <LogoLink to='/'>9UCCI</LogoLink>
            <StyledNav>
                {!isLogin && !isAdmin && (<><JoinLink to='/join'>JOIN</JoinLink>
                <LoginLink to='/login'>LOGIN</LoginLink>
                <CartLink to='/cart'>CART</CartLink></>)}
                {isLogin && <> <StyledButton onClick={LogoutHandler}>LOGUT</StyledButton> 
                <MypageLink to='/mypage'>MY PAGE</MypageLink></>}
                {isAdmin && <><AdminLink to='/admin'>ADMIN</AdminLink>
                <StyledButton onClick={LogoutHandler}>LOGOUT</StyledButton><MypageLink to='/mypage'>MY PAGE</MypageLink></>}
            </StyledNav>
            <StyledCategory>
                <TopLink to='/top'>TOP</TopLink>
                <Link to='/bottom'>BOTTOM</Link>
                <OuterLink to='/outer'>OUTER</OuterLink>
            </StyledCategory>
        </div>
    </>
    )
}

export default Header;
const ImgBlock = styled.img `
  width : 100vw;
  height : 30vh;
  object-fit : cover;
  filter : brightness(65%);
`
const LogoLink = styled(Link) `
  position : absolute;
  width : 3em;
  height : 150px;

  font-style : normal;
  font-weight: 700;
  font-size: 4.5em;

  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
`
const StyledNav = styled.div `
    position : absolute;
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    margin-bottom: 12em;
    a {
    text-decoration: none;
    color: #FFFFFF;
    
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    }
    
    button {
        border : none;
        background-color : transparent;
        
        font-weight: 600;
        font-size: 1.2em;
        text-align: center;
        color : #FFFFFF;
    }
`
const JoinLink = styled(Link)`
    margin-right: 4em;
    width: 4em;
    height: 2em;
`

const LoginLink = styled(Link) `
    margin-right: 4em;
    width: 4em;
    height: 2em;
`
const AdminLink = styled(Link) `
    width: 4em;
    height: 2em;
`
const MypageLink = styled(Link) `
    width: 6em;
    height: 2em;
`
const CartLink = styled(Link)`
    margin-right: 2em;
    width: 4em;
    height: 2em;
`
const StyledCategory = styled.div`
    position: absolute;
    margin-top: 15em;
    margin-bottom: 1em;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 5vh;

    a{
        text-decoration: none;
        color: #FFFFFF;
    
        font-weight: 700;
        font-size: 2em;
        text-align: center;
    }
`
const TopLink = styled(Link) `
    margin-left: 2em;
`

const OuterLink = styled(Link) `
    margin-right: 2em;
`

const StyledButton = styled.button `
  width : 4em;
  height : 1em;
  
  margin-right : 2em;
`