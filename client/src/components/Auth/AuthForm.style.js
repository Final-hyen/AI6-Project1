import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40em;
    border-radius: 4px;
    & span {
        margin-bottom: 10px;
        font-size: 32px;
    }
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    & span {
        font-size: 18px;
        margin-bottom : 10px;
    }
`;

export const Input = styled.input`
    width: 40rem;
    height: 5rem;
    padding-left: 10px;
    font-size: 18px;
    border-radius: 10px;

    margin-bottom: 1rem;

`;

export const Button = styled.button`
    width: 30rem;
    height: 4rem;
    border: none;
    border-radius: 10px;
    background-color: #439A97;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 20px;
    font-weight: bold;
    font-family: 'intelone-mono-font-family-regular', sans-serif;
    &:hover {
        opacity: 0.7;
    }
    &:disabled {
        cursor: auto;
        opacity: 1.0;
      }
    &.editUser{
        font-size: 25px;
    }
`;

