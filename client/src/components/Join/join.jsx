import {useNavigate} from 'react-router-dom';
import { Form, Button, Input, InputBox } from "../Auth/AuthForm.style";
import { checkValidation } from "../../utils/validation";
import { signUp } from "../../api/authFetcher";
import { useAuthForm } from '../../hooks/useAuthForm';

function JoinForm() {
  const { 
    authData : {email, password, name},
    handleChange,
} = useAuthForm();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await signUp(email, password, name)
      .then(res => {
        if(res?.status === 201){
          navigate('/login');
        }
      })
      .catch( err => {
        alert(err);
      })

  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <Input
          id="email"
          type="text"
          placeholder="Email을 입력하세요"
          onChange={handleChange}
        />
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
        />
        <Input
          id="name"
          type="text"
          placeholder="닉네임을 입력하세요"
          onChange={handleChange}
        />
      </InputBox>
      <Button disabled={!checkValidation(email, password)}>SignUp</Button>
    </Form>
  );
}
export default JoinForm;
