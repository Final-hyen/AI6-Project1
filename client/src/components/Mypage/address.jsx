import React from "react";
import DaumPostcode from "react-daum-postcode";
import { Div, ModalBackdrop, ModalContain, ModalView } from './PopUp';

const AddressPopup = ( props ) => {
  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    props.setData({
        ...props.data,
        address: fullAddress
    });
    props.setIsPopup(false)
  };
  return (
    <ModalContain>
      <ModalBackdrop>
        <ModalView>
          <DaumPostcode className="postmodal" autoClose onComplete={complete}/>
        </ModalView>
      </ModalBackdrop>
    </ModalContain>
  )
};

export default AddressPopup;



// return (
//   <Div>
//     <DaumPostcode className="postmodal" autoClose onComplete={complete}/>
//   </Div>
// );