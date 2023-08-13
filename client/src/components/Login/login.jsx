import {useNavigate} from 'react-router-dom';
import { Form, Button, Input, InputBox } from "../Auth/AuthForm.style";
import { signIn } from "../../api/authFetcher";
import { useAuthForm } from '../../hooks/useAuthForm';
import { checkValidation } from '../../utils/validation';

function Login() {
    const {
        authData: {email, password},
        handleChange,
    } = useAuthForm();

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn(email, password)
          .then(res => {
            if(res?.status === 200){
                navigate('/');
                console.log(document.cookie)
            }
          })
          .catch( err => {
            alert(err);
          })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <InputBox>
                <Input id='email' type='text' placeholder='Email을 입력하세요' onChange={handleChange}/>
                <Input id='password' type='password' placeholder='비밀먼호를 입력하세요' onChange={handleChange}/>
            </InputBox>
            <Button disabled={!checkValidation(email, password)}>Login</Button>
        </Form>
    )
}
export default Login;