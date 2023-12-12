import React from "react";
import { Form, Button, Input, InputBox } from "../Auth/AuthForm.style";

function LoginPresentation({
  email,
  password,
  handleChange,
  handleSubmit,
  checkValidation,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <span>Login Page</span>
      <InputBox>
        <Input
          id="email"
          type="text"
          placeholder="Email을 입력하세요"
          onChange={handleChange}
          value={email}
        />
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
          value={password}
        />
      </InputBox>
      <Button disabled={!checkValidation(email, password)}>Login</Button>
    </Form>
  );
}

export default LoginPresentation;
