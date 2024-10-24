// import React from 'react'
// import { Image, Divider, Text } from "@chakra-ui/react";
// import { countryMapperFunction } from '../data/countryMapper';

// const ReservedCard = ({ transaction_type, transaction_date, withdrawal_amount, deposit_amount, reservation_period, currency_code, onClick }) => {
//   // transaction_type에 따라 텍스트를 변환하는 함수
//   const getTransactionLabel = (type) => {
//     if (type === 'buy') return '살래요';
//     if (type === 'sell') return '팔래요';
//     return type;  // 기본적으로 원래 transaction_type을 반환
//   };
//   console.log(reservation_period)
//   return (
//     <div onClick={onClick} className="cursor-pointer">
//       <div className='flex gap-1 mt-2'>
//         <Text name='사기팔기' className='border-2 border-red-400 text-red-500 py-[0.1px] px-1 rounded-md'>{getTransactionLabel(transaction_type)}</Text>
//         <Text className='border-2 border-slate-600 py-[0.1px] px-1 rounded-md'>예약</Text>
//       </div>
//       <div className='flex justify-between'>
//         <div className='flex items-center gap-1 mt-2'>
//           <Image 
//             src={countryMapperFunction(currency_code).image}
//             className='w-[22px] h-[22px]'
//           />
//           <Text className='font-semibold'>{currency_code}</Text>
//           <Text name='amount1' className='font-semibold'>{deposit_amount}</Text>
//         </div>
//         <Text className='font-semibold'>예약완료</Text>
//       </div>
//       <div className='flex justify-between items-center mb-2'>
//         <Text name='amount2' className='text-lg text-slate-600 ml-5'>{withdrawal_amount}</Text>
//         <Text>{reservation_period}</Text>
//       </div>
//       <Divider />
//     </div>
//   );
// }; 

// export default ReservedCard
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

  // transaction_type에 따라 다른 스타일 적용
  const getTransactionStyle = (type) => {
    if (type === 'sell') {
      return 'border-blue-400 text-blue-500';
    }
    return 'border-red-400 text-red-500';
  };

  // sell일 때 amount 값을 변경하는 로직
  const getAmount1 = (type) => (type === 'sell' ? withdrawal_amount : deposit_amount);
  const getAmount2 = (type) => (type === 'sell' ? deposit_amount : withdrawal_amount);

  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className='flex gap-1 mt-2'>
        {/* 사기팔기 컴포넌트의 스타일과 텍스트가 transaction_type에 따라 달라짐 */}
        <Text
          name="사기팔기"
          className={`border-2 py-[0.1px] px-1 rounded-md ${getTransactionStyle(transaction_type)}`}
        >
          {getTransactionLabel(transaction_type)}
        </Text>
        <Text className='border-2 border-slate-300 py-[0.1px] px-1 rounded-md'>예약</Text>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1 mt-2'>
          <Image 
            src={countryMapperFunction(currency_code).image}
            className='w-[20px] h-[20px]'
          />
          <Text className='font-semibold'>{currency_code}</Text>
          {/* transaction_type에 따라 amount1과 amount2의 값을 동적으로 렌더링 */}
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
