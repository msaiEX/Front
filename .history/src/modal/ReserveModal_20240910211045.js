// export default ReserveModal;
import React from 'react'
import { Image, Divider, Text } from "@chakra-ui/react";
// import { countryMapperFunction } from '../data/countryMapper';

const ReservedCard = ({ transaction_type, transaction_date, withdrawal_amount, deposit_amount, reservation_period, currency_code, onClick }) => {
  const getTransactionLabel = (type) => {
    if (type === 'buy') return '살래요';
    if (type === 'sell') return '팔래요';
    return type;
  };

  const getTransactionStyle = (type) => {
    if (type === 'sell') {
      return 'border-blue-400 text-blue-500';
    }
    return 'border-red-400 text-red-500';
  };

  const getAmount1 = (type) => (type === 'sell' ? withdrawal_amount : deposit_amount);
  const getAmount2 = (type) => (type === 'sell' ? deposit_amount : withdrawal_amount);

  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className='flex gap-1 mt-2'>
        <Text
          name="사기팔기"
          className={`border-2 py-[0.1px] px-1 rounded-md ${getTransactionStyle(transaction_type)}`}
        >
          {getTransactionLabel(transaction_type)}
        </Text>
        <Text className='border-2 border-slate-400 text-slate-400 py-[0.1px] px-1 rounded-md'>예약</Text>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1 mt-2'>
          <Image 
            // src={countryMapperFunction(currency_code).image}
            src="image/jpy_flag"
            className='w-[20px] h-[20px]'
          />
          <Text className='font-semibold'>{currency_code}</Text>
          <Text name="amount1" className='font-semibold'>{getAmount1(transaction_type)}</Text>
        </div>
        <Text className='font-semibold'>예약완료</Text>
      </div>
      <div className='flex justify-between items-center mb-2'>
        <Text name="amount2" className='text-lg text-slate-600 ml-5'>{getAmount2(transaction_type)}</Text>
        <Text>{reservation_period}</Text>
      </div>
      <Divider />
    </div>
  );
}; 

export default ReservedCard;
