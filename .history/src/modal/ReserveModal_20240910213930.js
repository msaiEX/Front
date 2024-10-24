// // export default ReserveModal;
// import React from 'react'
// import { Image, Divider, Text, ModalContent } from "@chakra-ui/react";
// // import { countryMapperFunction } from '../data/countryMapper';

// const ReservedCard = ({ transaction_type, transaction_date, withdrawal_amount, deposit_amount, reservation_period, currency_code, onClick }) => {
//   const getTransactionLabel = (type) => {
//     if (type === 'buy') return '살래요';
//     if (type === 'sell') return '팔래요';
//     return type;
//   };

//   const getTransactionStyle = (type) => {
//     if (type === 'sell') {
//       return 'border-blue-400 text-blue-500';
//     }
//     return 'border-red-400 text-red-500';
//   };

//   const getAmount1 = (type) => (type === 'sell' ? withdrawal_amount : deposit_amount);
//   const getAmount2 = (type) => (type === 'sell' ? deposit_amount : withdrawal_amount);

//   return (
//     <ModalContent>
//     <div onClick={onClick} className="cursor-pointer">
//       <div className='flex gap-1 mt-2'>
//         <Text
//           name="사기팔기"
//           className={`border-2 py-[0.1px] px-1 rounded-md ${getTransactionStyle(transaction_type)}`}
//         >
//           {getTransactionLabel(transaction_type)}
//         </Text>
//         <Text className='border-2 border-slate-400 text-slate-400 py-[0.1px] px-1 rounded-md'>예약</Text>
//       </div>
//       <div className='flex justify-between'>
//         <div className='flex items-center gap-1 mt-2'>
//           <Image 
//             // src={countryMapperFunction(currency_code).image}
//             src="/image/jpy_flag"
//             className='w-[20px] h-[20px]'
//           />
//           <Text className='font-semibold'>{currency_code}</Text>
//           <Text name="amount1" className='font-semibold'>{getAmount1(transaction_type)}</Text>
//         </div>
//         <Text className='font-semibold'>예약완료</Text>
//       </div>
//       <div className='flex justify-between items-center mb-2'>
//         <Text name="amount2" className='text-lg text-slate-600 ml-5'>{getAmount2(transaction_type)}</Text>
//         <Text>{reservation_period}</Text>
//       </div>
//       <Divider />
//     </div>
//     </ModalContent>
//   );
// }; 

// export default ReservedCard;


// ReserveMadal
import React, { useEffect } from "react";
import {
  ModalContent,
  Text,
  Image,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
const ReserveModal = ({
  onClose,
  onPurchaseClick,
  value,
  exchangeValue,
  calculatedValue,
  selected,
  changeState,
  handleSetValue,
}) => {
  // 날짜를 넣으면 변환해주는 코드
  const formatDateRange = (dates) => {
    const startDate = new Date(dates.startDate);
    const endDate = new Date(dates.endDate);

    // YYYY-MM-DD 형식으로 변환
    const startDateString = startDate.toISOString().split("T")[0];
    const endDateString = endDate.toISOString().split("T")[0];

    return `${startDateString}~${endDateString}`;
  };
  const handleCloseAndPurchase = () => {
    onClose();
    onPurchaseClick();
    handleSetValue();
  };

  return (
    <ModalContent className="px-6">
      <ModalCloseButton />
      <div className="flex justify-center">
        <Text className="py-4 font-semibold text-xl mb-2">예약완료</Text>
      </div>

      <div className="flex justify-center pb-4">
        <Image src="/image/check.png" boxSize={"84px"}></Image>
      </div>
      {/* 1번줄 */}
      <div className="flex justify-center gap-1">
        <Text className="flex text-slate-600 font-normal justify-center text-2xl">
          {changeState}
        </Text>
        <Text className="flex font-semibold justify-center text-2xl">
          {exchangeValue}
        </Text>
        {/* selected에 따라 바꿈 */}
        {selected ? (
          <Text className="flex text-slate-600 font-normal justify-center text-2xl">
            을 사는 거래를 예약했습니다.
          </Text>
        ) : (
          <Text className="flex text-slate-600 font-normal justify-center text-2xl">
            을 파는 거래를 예약했습니다.
          </Text>
        )}
      </div>
      {/* 2번줄 */}
      <div className="flex justify-center gap-1">
        <Text className="flex text-slate-600 font-normal justify-center text-2xl">(예약환율로 거래시 KRW</Text>
        <Text className="flex font-semibold justify-center text-2xl">
          {Math.round(calculatedValue)}
        </Text>
        <Text className="flex text-slate-600 font-normal justify-center text-2xl">)</Text>
      </div>
      {/* 3번줄 */}
      <div className="flex justify-center items-center mt-2">
        <Text className="flex text-slate-600 font-normal justify-center text-lg">
          이 주문은 예약종료일 17:00까지 유지됩니다.
        </Text>
      </div>
      {/* 마지막 부분 */}
      <div className="bg-slate-100 rounded-md mx-2 mt-2 py-4 px-4">
        <div className='flex justify-between mb-2'>
          <Text className='text-slate-500'>에약환율</Text>
          <Text>{calculatedValue}</Text>
        </div>
        <div className='flex justify-between'>
          <Text className='text-slate-500'>에약기간</Text>
          <Text>{formatDateRange(value)}</Text>
        </div>
      </div>

      <div className="flex justify-end my-4">
        <Button colorScheme="gray" mr={3} onClick={handleCloseAndPurchase}>
          닫기
        </Button>
        <Button name="구매하기" colorScheme="green" onClick={onPurchaseClick}>
          구매하기
        </Button>
      </div>
    </ModalContent>
  );
};

export default ReserveModal;