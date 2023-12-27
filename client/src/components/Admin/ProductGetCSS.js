import styled from "styled-components";
export const Table = styled.table`
  width: 100vw;
  text-align: center;
  border: 1px solid #fff;
  border-spacing: 1px;
  font-family: "Cairo", sans-serif;
`;
export const Caption = styled.caption`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 2rem;
  width: 200px;
`;
export const Td = styled.td`
  padding: 10px;
  background-color: #eee;
  font-size : 1.2rem;
  width: 200px;
`;
export const Th = styled.th`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;
export const Img = styled.img`
  width: 10rem;
  height: 10rem;
`;
export const Button = styled.button`
  border : none;
  padding : 10px 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  &.delete {
    background-color: #E91E63;
  }
  &.view {
    background-color: #03A9F4;
    margin-right: 10px;
  },
  &.edit {
    background-color: #F94C10;
    margin-right: 10px;
  },
  .orderControll {
    margin-bottom: 10px;
    width: 200px;
    background: rgb(211,211,211);
    color: rgb(61,61,61);
    border: 2px solid black;
    border-radius: 5px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const H1 = styled.h1`
  text-align: center;
`