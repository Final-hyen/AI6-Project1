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

    a {
        font-size: 18px;
        text-decoration: none;
        color: #09aa5c;
    }
`
export const ProductImg = styled.img`
    width: 250px;
    margin: 40px;
`

export const Button = styled.button`
    font-size: 15px;
    font-weight: 500;
    color: #1e1e23;
    
    line-height: 21px;
    letter-spacing: -0.3px;
    
    width: 100%;
    padding: 7px 7px 6px 7px;

    border: 2px solid #dcdee0;
    border-radius 10px;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    background-color: #fff;

    &.Toggle {
        margin: auto;
    }
`

export const Case = styled.span`
    font-size: 25px;
    margin-left: 30px;
    margin-top: 30px;
`