import React from 'react'
import { Image, Divider, Text } from "@chakra-ui/react";

const ReservedCard = ({ transaction_type, transaction_date, withdrawal_amount, deposit_amount, reservation_period, currency_code, onClick }) => {
  // transaction_type에 따라 텍스트를 변환하는 함수
  const getTransactionLabel = (type) => {
    if (type === 'buy') return '사기';
    if (type === 'sell') return '팔기';
    return type;  // 기본적으로 원래 transaction_type을 반환
  };
  
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className='flex'>
        <Text>{getTransactionLabel(transaction_type)}</Text>
        <div>예약</div>
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <Image />
          <div>{currency_code}</div>
          <div>{deposit_amount}</div>
        </div>
        <div>예약완료</div>
      </div>
      <div className='flex mb-3'>
        <div>{withdrawal_amount}</div>
      </div>
      
      <Divider />
    </div>
  );
};

export default ReservedCard
