import styled from "styled-components";

export const Contain = styled.div`
    margin : auto;
    width : 1500px;
`
export const ProductNav = styled.div`
    margin : 20px 0;
    font-size: 2rem;
    & a{
        text-decoration : none;
        color : black;
    }
`
export const ProductWrap = styled.div`
    display : flex;
    flex-direction : row;
    & img {
        height: 667px;
        object-fit: cover;
        object-position: 50% 50%;
    }
`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content : space-around;
    & span {
        font-size: 25px;
    }
    margin-left : 30px;
    
`
export const Button = styled.button`
    height : 2rem;
    border: none;
    border-radius: 10px;
    background-color: #A9A9A9;
    color : #FFFAFA;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-weight: bold;
    font-family: 'intelone-mono-font-family-regular', sans-serif;
    &:hover {
        opacity: 0.7;
    }
    cursor: pointer;
`