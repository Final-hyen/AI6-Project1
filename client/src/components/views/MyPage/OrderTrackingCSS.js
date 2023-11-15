import styled from "styled-components";

export const Title = styled.div`
    text-align: center;
    padding-top: 50px;
    font-size : 25px;
`

export const Ordertracking = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
`
export const Orderlists = styled.div`
  border: solid grey;
  border-radius: 50px;
  padding: 30px;
  margin: 30px;
  
display: flex;
text-align: center;

  img {
    margin: 30px;
  }
`
export const OrderStatus = styled.div`
border-left: solid grey;
border-right: solid grey;
border-radius: 50px;
padding: 10px;
  margin: 30px;

  display: flex;
  text-align: center;
`

export const Status = styled.div`
display: flex;
flex-direction: column;
text-align:center;
padding: 80px;
 margin: auto;
 & div {
  margin-top: 10px;
 }
//  background-color: blue;
`

export const Div = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

`



export const Cont = styled.div`
	button {
		margin: 2px;
		background-color: grey ;
		color: white;
    border: 3px solid;
    border-radius: 10px;
	}
`