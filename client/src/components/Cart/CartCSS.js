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
    height: 30px;
    background-color: tomato;
    color: white;
    border: 3px solid;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'intelone-mono-font-family-regular', sans-serif;
  }

  .order {
    width: 30%;
    height: 40px;
    margin: 20px auto;

    border: none;
    border-radius: 10px;
    background-color: #439A97;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 20px;
    font-weight: bold;
    font-family: 'intelone-mono-font-family-regular', sans-serif;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
    
    &:disabled {
      cursor: auto;
      opacity: 1.0;
    }

  }
`;
