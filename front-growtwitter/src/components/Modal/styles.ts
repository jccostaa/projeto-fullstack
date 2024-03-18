import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 35%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PlainTextarea = styled.textarea`
  outline: none;
  background: transparent;
  padding: 0;
  width: 100%;
  height: 200px;
  resize: none;
  border: none;
`;

export const ButtonCloseModal = styled.button`
  background: #fff;
  width: 20px;
  border: none;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(216, 215, 215);
`;

export const ButtonTweet = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  margin-top: 10px;
  padding: 10px;
  border-radius: 30px;
  width: 5vw;
  margin-left: 85%;
  cursor: pointer;
`;