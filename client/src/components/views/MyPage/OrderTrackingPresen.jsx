import React from "react";
import { MyPageNav } from "../../Mypage/MypageNav";
import { OrderStatus, Status, Title } from "./OrderTrackingCSS";

const OrderTrackingPresentation = () => {
    return (
        <>
            <MyPageNav />
            <Title>
                <h4>[주문/배송 조회하기]</h4>
            </Title>
            <OrderStatus>
                <Status>
                    배송 준비중
                    <div>
                        <a href="/edit"><button>주문 정보 수정</button></a>
                        <a href="/deleteorder"><button>주문 취소</button></a>
                    </div>
                </Status>
                <Status>
                    배송 중
                </Status>
                <Status>
                    배송 완료
                </Status>
            </OrderStatus>
            
        </>
    )
}

export default OrderTrackingPresentation