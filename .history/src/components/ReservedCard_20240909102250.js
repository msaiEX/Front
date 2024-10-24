import React from 'react'
import { Image, Divider, Text } from "@chakra-ui/react";

const ReservedCard = ({ transaction_type, transaction_date, withdrawal_amount, deposit_amount, reservation_period, currency_code, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className='flex'>
        <Text>{transaction_type}</Text>
        <div>예약</div>
      </div>
      <div className='flex'>
        <div className='flex'>
          <Image />
          <div>{currency_code}</div>
          <div>{withdrawal_amount}</div>
        </div>
        <div>예약완료</div>
      </div>
      <div className='flex mb-3'>
        <div>{deposit_amount}</div>
      </div>
      
      <Divider />
    </div>
  );
};

export default ReservedCard
