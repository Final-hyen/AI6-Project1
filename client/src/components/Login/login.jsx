import {useNavigate} from 'react-router-dom';
import { Form, Button, Input, InputBox } from "../Auth/AuthForm.style";
import { emailVaildation, passwordValidation } from "../../utils/validation";
import { useState } from "react";
import { signIn } from "../../api/authFetcher";

function Login() {
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    
    const onChangeUserData = (e) => {
        if(e.targe.id === 'email'){
            if(emailVaildation(e.target.value)) {
                setUserData((curData) => {
                    return { ...curData, [e.target.id] : e.target.value}
                });
            };
        }else if (e.target.id === 'password') {
            if(passwordValidation(e.target.value)){
                setUserData((curData) => {
                    return { ...curData, [e.target.id] : e.target.value};
                })
            }
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn(userData.email, userData.password)
          .then(res => {
            if(res?.status === 201){
                navigate('/');
            }
          })
          .catch( err => {
            alert(err);
          })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <InputBox>
                <Input id='email' placeholder='Email을 입력하세요' onChange={onChangeUserData}/>
                <Input id='password' placeholder='비밀먼호를 입력하세요' onChange={onChangeUserData}/>
            </InputBox>
            <Button>Login</Button>
        </Form>
    )
}
export default Login;