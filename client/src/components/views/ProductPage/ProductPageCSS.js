import styled from "styled-components";

export const Contain = styled.div`
    marign: auto;
`
export const Grid = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    @media screen and (max-width: 1280px) {
        gap: 5px;
    }
`

export const Figure = styled.figure`
    border: thin #c0c0c0 solid;
    display: flex;
    flex-flow: column;
    justify-content: center;
    max-width: 500px;
    margin: 1rem auto;
    & a {
        text-decoration: none;
        color: black;
        height: 435px;
    }
    & p {
      margin-left : 15px;  
    }
`

export const Img = styled.img`
    width: 300px;
    height: 300px;
    margin: auto;
    object-fit: scale-down;
`