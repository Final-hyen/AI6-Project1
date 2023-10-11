import styled from "styled-components";

export const Table = styled.div`
  // background-color: lightgreen;
  
  text-align: center;
  margin: 20px auto;
  width: 100vh;
  table {
    width: 100%;
    border-top: 1px solid grey;
    border-collapse: collapse;
    border-left: none;
    border-right: none;
  }

  th,
  td {
    border-bottom: 1px solid grey;
    border-left: none;
    border-right: none;
    padding: 10px;
  }

  //왜 적용이 안되는건지
  img {
    width: 100px;
    height: 100px;
  }

  .delete {
    background-color: tomato;
    color: white;
    border: 3px solid;
    border-radius: 10px;
  }
`;
