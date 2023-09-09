import styled from "styled-components";

export const ProductForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top : 2rem;
`

export const ProductInput = styled.input`
    width: 40rem;
    height: 5rem;
    font-size: 20px;
    border-radius: 10px;
    padding-left: 10px;
    margin : 1.2rem 0;
`

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
`

export const Label = styled.span`
    font-size: 20px;
`