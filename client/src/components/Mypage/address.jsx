import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressPopup = (props) => {
	const complete = (data) => {
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
	return <DaumPostcode className="postmodal" autoClose onComplete={complete} />;
};

export default AddressPopup;
