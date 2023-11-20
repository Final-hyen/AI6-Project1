import styled from "styled-components";

export const Contain = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & img {
        width: 530px;
        height: auto;
    }
    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 20px;
        text-align: center;
    }
`