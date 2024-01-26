import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    border-left: solid grey;
    border-right: solid grey;
    border-radius: 50px;
    margin: 30px;
    
    .date {
        font-size: 20px;
        font-weight: bold;
    }
`

export const Status = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Descriptions = styled.div`
    width: 800px;
    font-size: 30px;
    display: flex;
    flex-direction : column;
`
export const ProductImg = styled.img`
    width: 250px;
    margin: 40px;
`

export const Button = styled.button`
    width: 400px;
`