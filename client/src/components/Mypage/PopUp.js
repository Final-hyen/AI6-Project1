import styled from "styled-components";

export const Div = styled.div`
  & DaumPostcode .postmodal {
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;
export const ModalContain = styled.div`
`;

export const ModalBackdrop = styled.div`
  .postmodal {
    z-index: 1;
    position: fixed;
    left: 0;
    top: 40%;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 500px;
  heigth: 200px;
  background-color: #ffffff;
  > div.desc {
    margin: 50px;
    font-size: 20px;
    color: var(--coz-purple-600);
  }
`;