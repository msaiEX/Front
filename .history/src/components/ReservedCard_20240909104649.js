import React from 'react'
import { Image, Divider, Text } from "@chakra-ui/react";
import { countryMapperFunction } from '../data/countryMapper';


const ReservedCard = ({ transaction_type, transaction_date, withdrawal_amount, deposit_amount, reservation_period, currency_code, onClick }) => {
  // transaction_type에 따라 텍스트를 변환하는 함수
  const getTransactionLabel = (type) => {
    if (type === 'buy') return '살래요';
    if (type === 'sell') return '팔래요';
    return type;  // 기본적으로 원래 transaction_type을 반환
  };
  console.log(reservation_period)
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className='flex gap-1 mt-2'>
        <Text className='border-2 border-red-400 text-red-500 py-[0.1px] px-1 rounded-md'>{getTransactionLabel(transaction_type)}</Text>
        <Text className='border-2 border-slate-600 py-[0.1px] px-1 rounded-md'>예약</Text>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1 mt-2'>
          <Image 
            src={countryMapperFunction(currency_code).image}
            className='w-[22px] h-[22px]'  
          />
          <Text className='font-semibold'>{currency_code}</Text>
          <Text className='font-semibold'>{deposit_amount}</Text>
        </div>
        <Text className='font-semibold'>예약완료</Text>
      </div>
      <div className='flex mb-2'>
        <Text className='text-lg'>{withdrawal_amount}</Text>
        <Text>{reservation_period}</Text>
      </div>
      
      <Divider />
    </div>
  );
};

export default ReservedCard
