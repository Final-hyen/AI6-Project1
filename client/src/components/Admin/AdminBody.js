import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';


export function AdminBody() {
	return(
  <AdminBodyContainer>
    <h2>관리자 페이지 입니다</h2>
		<AdminButtonsGroup>
			<Link to='/productedit'><button className="adminButtons">상품정보 수정</button></Link>
      <Link to='/productpost'><button className="adminButtons">상품 등록</button></Link>
			<Link to='/product'><button className="adminButtons">상품 조회 및 삭제</button></Link>
		</AdminButtonsGroup>
	</AdminBodyContainer>
  )
}

const AdminBodyContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 70vh;
  sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;

`

const AdminButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  .adminButtons {
    background-color: white;
    border: 3px solid grey;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    
    font-family: 'intelone-mono-font-family-regular', sans-serif;
    font-size: 30px;
    
    width: 30em;
    height: 120px;

    margin-bottom: 2em;
  }
  

`
