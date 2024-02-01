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
    font-size: 25px;
    display: flex;
    flex-direction : column;

    a {
        font-size: 18px;
        text-decoration: none;
        color: #09aa5c;
    }
`
export const ProductImg = styled.img`
    width: 152px;
    height: 152px;

    margin: 25px;
`

export const Button = styled.button`
    font-size: 15px;
    font-weight: 500;
    color: #1e1e23;
    
    line-height: 21px;
    letter-spacing: -0.3px;
    
    padding: 7px 7px 6px 7px;

    border: 2px solid #dcdee0;
    border-radius 10px;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    background-color: #fff;
    cursor: pointer;
    
    &.toggle {
        width: 800px;
        margin: 0 25px 20px;
    }

    &.detail {
        width: 250px;
        margin: 10px 0;
    }
`

export const Case = styled.div`
    display: inline-block;

    font-size: 25px;
    font-weight: 600;

    margin-top: 30px;
    margin-left: 30px;
`
export const List = styled.li`
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
    margin-bottom: 15px;
`
export const Unordered = styled.ul`
    width: 80%;
    list-style: none;
    
    margin: 0 auto;
    padding: 0;

`
export const Line = styled.div`
    position: relative;
    height: 10px;
    background: url('../../../public/image/DotImg.webp') repeat-x 0 50%;
`