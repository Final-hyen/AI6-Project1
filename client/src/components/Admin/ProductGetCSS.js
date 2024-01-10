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
  font-size: 1.2rem;
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
  border: none;
  padding: 10px 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  &.delete {
    background-color: #e91e63;
  }
  &.view {
    background-color: #03a9f4;
    margin-right: 10px;
  }
  ,
  &.edit {
    background-color: #f94c10;
    margin-right: 10px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const OrderGetButton = styled.button`
  margin-bottom: 10px;
  width: 200px;

  font-weight: bold;
  font-size: 24px;

  border: none;
  border-radius: 10px;

  ${(props) =>
    props.status === props.text && `background: #3559E0; color: #f3f8ff;`};
`;

export const H1 = styled.h1`
  text-align: center;
`;
