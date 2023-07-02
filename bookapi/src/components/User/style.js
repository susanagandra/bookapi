import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
  border: black;
`;

export const UserInfoContainer = styled.div`
  margin-right: 20px;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Email = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ProfilePicture = styled.img`
  max-width: 40%;
  height: auto;
`;

export const UpdateButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 70px;
  border-radius: 4px;
`;

export const ModalTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 0;
  font-size: 16px;
  color: #000;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalForm = styled.form`
  margin-top: 16px;
`;

export const ModalFormGroup = styled.div`
  margin-bottom: 16px;
`;

export const ModalLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ModalActions = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const ModalSubmitButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
`;

export const ModalCancelButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #f1f1f1;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;