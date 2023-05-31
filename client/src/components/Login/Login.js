import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FloatingLabel } from 'react-bootstrap';
import axios from 'axios';

function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    //데이터를 받아오기 때문에 post
    //비동기처리로 쿠키를 저장해야함;; 
    (async()=>{
      // 데이터를 보낼 수 있는 형식으로 라우터를 바꿨음
      // server/router/login => router.get에서 router.post로 변경
      await axios.post(
      ' http://localhost:5000/signin',
      {email:email,password:password},
      //다른 포트간에 쿠키를 주고받을때 withCredentials는 필수.
      //server/app.js 또한 cors로 withCredentials를 적용중.
      { withCredentials: true }
      ).then((res) => {
        console.log(res.data);
        if(res.data.roll === true) {
          navigate('/')
          sessionStorage.setItem('admin', res)
        }
        else if (res.data.roll === false) {
          navigate('/')
          sessionStorage.setItem('user', res)
        }
      }).catch(e=>console.log(e.message));})()
      
  
  }

  return (
    <Wrap>
      <input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <ButtonWrap>
        <Link to='/join'><Button type='submit'>Join</Button></Link>
        <Button type="submit" onClick={loginHandler}>Login</Button>
      </ButtonWrap>
    </Wrap>
  )
}

export default LoginForm;

const Wrap = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 30vh;

  margin-top: 7em;
  
  & input {
    width: 60em;
    height: 3em;

    padding: 1em;
    margin-bottom: 2em;

    border-radius: 20px; 
  }
  & input::placeholder {
    font-size: 2em;
  }

`;

const ButtonWrap = styled.div`
  display : flex;
  justify-content : space-around;
  width: 40vw;

  Button {
    width: 10em;
    height: 3em;
    
    background-color : #6c757d;
    border-color : #6c757d;
    border-radius : 5px;

    font-size: 1rem; 
  }
`;

