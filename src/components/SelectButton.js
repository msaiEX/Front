import React from "react";
import { Button } from "@chakra-ui/react";
const SelectButton = ({ onOpen, handleSelectClick }) => {
  const handleOpenClick = () => {
    onOpen();
    handleSelectClick();
  };
  return (
    <button
      onClick={handleOpenClick}
      className="border border-sky-500 text-sky-500 px-4 py-2 rounded hover:bg-sky-500 hover:text-white transition-all"
      style={{ height: "42px", width: "200px" }}
    >
      조회/변경
    </button>
  );
};

export default SelectButton;
