# :handbag: 프로젝트 소개
본 프로젝트는 엘리스 AI 트랙 6기 첫 번째 프로젝트로, 9팀에서 개발한 의류 구매 서비스 '9UCCI' 입니다.


### 프로젝트 기간
2023년 1월 30일(월) ~ 2023년 2월 10일(금), 2주 간


### 프로젝트 목적
운영자가 여러 의류사의 제품을 등록하여 상의, 하의, 아우터까지 판매 가능한 서비스입니다.
<br>
사용자는 운영자가 등록한 제품들을 카테고리에 따라 확인할 수 있고 구매할 수 있는 서비스 입니다.


### 기술 스택
 - Front-end : <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black">
 - Back-end  : <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=black"> <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">


### 팀 멤버
| 담당 업무 | 이름 |
| ------ | ------ |
| Front-end | 최종현, 최지원, 윤휘향 |
| Back-end | 이기석(팀장), 김수정, 윤지희 |

<br/>

# :handbag: 서비스 기능
### `User(사용자 관련 기능)`
**:one: 회원가입**

 - 사용자 정보 형식 확인
 - 사용자 정보 DB 저장

<br/>

**:two: 로그인**
 - DB 존재 여부 확인
 - 비밀번호 일치 확인
 - 로그인 성공 시, 토큰 발급
 - 토큰에 저장된 역할에 따라 헤더 구분 (관리자 / 이용자)


### `Product(상품 관련 기능)`
**:one: 카테고리**
 - 카테고리 구분, 상품 목록 조회

<br/>

**:two: 상품**
 - 상품 목록 조회
 - 상품 상세 정보 조회

### `Cart(장바구니 관련 기능)`
 - 장바구니 상품 DB 저장
 - 장바구니 상품 조회, 추가, 수정, 삭제
 - 장바구니 상품 총 가격 조회

### `Order(주문 관련 기능)`
 - 장바구니 상품으로 주문 추가
 - 상품 페이지에서 구매하기로 주문 추가
 - 주문조회에서 자신의 주문내역 취소
 - 주문완료 시 완료 페이지로 이동

<br/>

# :handbag: 서비스 관련
### 테스트 계정
 **:one: 관리자**
 - ID : user@3team.com
 - PW : 1234qwer
