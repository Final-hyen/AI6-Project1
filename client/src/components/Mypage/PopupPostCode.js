import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Background, Container } from './PopUpCSS';
const PopupPostCode = (props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
	const handlePostCode = (data) => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress +=
					extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}
		props.setData({
			...props.data,
			address: fullAddress,
		});
		props.setIsPopup(false);
	};
	const handleCloseModal = () => {
		props.setIsPopup(false);
	};

	return (
		<Container>
			<Background onClick={handleCloseModal}>
				<DaumPostcode
					className="modal"
					style={{ width: '40%', height: '500px', margin: '10% auto' }}
					autoClose
					onComplete={handlePostCode}
				/>
			</Background>
		</Container>
	);
};

export default PopupPostCode;
