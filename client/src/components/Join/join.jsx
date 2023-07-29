import {Form, Button, Input, InputBox } from '../Auth/AuthForm.style'

function AuthForm (){
    return (
        <Form>
            <InputBox>
                <Input id='email' type='text' placeholder='Email을 입력하세요'/>
                <Input id='password' type='password' placeholder='비밀번호를 입력하세요'/>
                <Input id='password' type='password' placeholder='비밀번호를 입력하세요'/>
                <Input id='userName' type='text' placeholder='닉네임을 입력하세요'/>
            </InputBox>
            <Button>SignUp</Button>
        </Form>
    )
}
export default AuthForm