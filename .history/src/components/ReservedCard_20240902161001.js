import React from 'react'
import { Image, Divider } from "@chakra-ui/react";
import { format } from 'date-fns';

const ReservedCard = ({ type, date, value, rangeDate, exchangeValue, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className='flex'>
        <div>{type}</div>
        <div>예약</div>
      </div>
      <div className='flex'>
        <div>
          <Image />
          <div>USD {exchangeValue}</div>
        </div>
        <div>예약완료</div>
      </div>
      <div className='flex mb-3'>
        <div>{value}</div>
        <div>{date}</div>
      </div>
      <Divider />
    </div>
  );
};

export default ReservedCard
