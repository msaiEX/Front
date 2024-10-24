// Clander.js
import React, { useState } from "react";
import { DatePicker } from "react-datepicker"; // 예시로 사용하는 날짜 선택 라이브러리
import "react-datepicker/dist/react-datepicker.css";

const Clander = ({ onDateChange, selectedDate, setSelectedDate}) => {

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // 상위 컴포넌트에 날짜 전달
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="날짜를 선택하세요"
      />
    </div>
  );
};

export default Clander;