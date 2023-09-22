import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../api/authFetcher';
import { useAuthForm } from '../../hooks/useAuthForm';
import { checkValidation } from '../../utils/validation';
import LoginPresentation from './LoginPresentation';

function LoginContainer() {
  const { authData: { email, password }, handleChange } = useAuthForm();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn(email, password);
      if (res?.status === 200) {
        localStorage.setItem('role', res.data.role);
        navigate('/');
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <LoginPresentation
      email={email}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      checkValidation={checkValidation}
    />
  );
}

export default LoginContainer;
