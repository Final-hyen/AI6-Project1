import React from "react";
import { AdminBodyContainer, AdminButtonsGroup, AdminLink } from "./AdminBodyCSS";


export function AdminBody() {
  return (
    <AdminBodyContainer>
      <h2>관리자 페이지 입니다</h2>
      <AdminButtonsGroup>
        <AdminLink href="/productpost">상품 등록</AdminLink>
        <AdminLink href="/product">상품 조회 및 삭제</AdminLink>
        <AdminLink href="/orderinfoget">주문 조회</AdminLink>
      </AdminButtonsGroup>
    </AdminBodyContainer>
  );
}