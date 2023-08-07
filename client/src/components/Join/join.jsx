import { Form, Button, Input, InputBox } from "../Auth/AuthForm.style";
import { emailVaildation, passwordValidation } from "../../utils/validation";
import { useState } from "react";

function AuthForm() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const onChangeUserData = (e) => {
    if (e.target.id === "email") {
      if (emailVaildation(e.target.value)) {
        setUserData((curUserdata) => {
          return { ...curUserdata, [e.target.id]: e.target.value };
        });
      }
    } else if (e.target.id === "password") {
      if (passwordValidation(e.target.value)) {
        setUserData((curUserdata) => {
          return { ...curUserdata, [e.target.id]: e.target.value };
        });
      }else{
        setUserData((curUserdata) => {
            return { ...curUserdata, [e.target.id]: ''}
        })
      }
    } else {
      return setUserData((curUserdata) => {
        return { ...curUserdata, [e.target.id]: e.target.value };
      });
    }
  };

  const onClickButton = (e) => {
    e.preventDefault();
  }
  console.log(userData);
  return (
    <Form>
      <InputBox>
        <Input
          id="email"
          type="text"
          placeholder="Email을 입력하세요"
          onChange={onChangeUserData}
        />
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={onChangeUserData}
        />
        <Input
          id="userName"
          type="text"
          placeholder="닉네임을 입력하세요"
          onChange={onChangeUserData}
        />
      </InputBox>
      <Button onClick={onClickButton}>SignUp</Button>
    </Form>
  );
}
export default AuthForm;
