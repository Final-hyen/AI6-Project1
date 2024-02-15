import React from "react";
import { MyPageNav } from "../../Mypage/MypageNav";
import { OrderStatus, Status } from "./OrderTrackingCSS";
import { Title } from "./TotalCSS";

const OrderTrackingPresentation = ({ status, playVideo }) => {
  return (
    <>
      <MyPageNav />
      <Title>
        <h4>[주문/배송 조회하기]</h4>
      </Title>
      <OrderStatus>
        <Status>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4862/4862457.png"
            alt="준비 재고 아이콘"
          />
          상품 준비중
          <div>
            <a href="/edit">
              <button>주문 정보 수정</button>
            </a>
            <a href="/deleteorder">
              <button>주문 취소</button>
            </a>
          </div>
        </Status>
        <Status>
          {status === "배송중" ? (
            <video
              src="https://cdn-icons-mp4.flaticon.com/512/10352/10352846.mp4"
              muted
              autoPlay
              loop
            />
          ) : (
            <video muted>
              <source
                src="https://cdn-icons-mp4.flaticon.com/512/10352/10352846.mp4"
                type="video/mp4"
              />
            </video>
          )}
          배송 중
        </Status>
        <Status>
          {status === "배송완료" ? (
            <video
              src="https://cdn-icons-mp4.flaticon.com/512/9820/9820045.mp4"
              muted
              autoPlay
              loop
            />
          ) : (
            <video muted>
              <source
                src="https://cdn-icons-mp4.flaticon.com/512/9820/9820045.mp4"
                type="video/mp4"
              />
            </video>
          )}
          배송 완료
        </Status>
      </OrderStatus>
    </>
  );
};

export default OrderTrackingPresentation;
