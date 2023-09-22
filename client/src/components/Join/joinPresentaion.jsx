import React from "react";
import { Form, Button, Input, InputBox } from "../Auth/AuthForm.style";


const JoinPresentation = (
  email,
  password,
  handleChange,
  handleSubmit,
  checkValidation,
) => {
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
    )
};

export default JoinPresentation;