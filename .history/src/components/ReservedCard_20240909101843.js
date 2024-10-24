import React from 'react'
import { Image, Divider, Text } from "@chakra-ui/react";

const ReservedCard = ({ type, date, value, rangeDate, exchangeValue, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className='flex'>
        <Text>{type}</Text>
        <div>예약</div>
      </div>
      <div className='flex'>
        <div>
          <Image />
          {/* <div>{exchangeValue}</div> */}
        </div>
        <div>예약완료</div>
      </div>
      <div className='flex mb-3'>
        <div>{value}</div>
      </div>
      
      <Divider />
    </div>
  );
};

export default ReservedCard
