// src/modal/AIModal.js
import React from "react";
import { ModalContent, ModalHeader, ModalBody, Button } from "@chakra-ui/react";

const AIModal = ({ onClose }) => {
  return (
    <ModalContent>
      <ModalHeader>AI 모달</ModalHeader>
      <ModalBody>
        <p>AI 관련 내용이 여기에 들어갑니다.</p>
        <Button colorScheme="blue" onClick={onClose}>
          닫기
        </Button>
      </ModalBody>
    </ModalContent>
  );
};

export default AIModal;
