// import React from "react";
// import { Text, Image } from "@chakra-ui/react";
// import { countryMapperFunction } from '../data/countryMapper';

// const TransactionExchangeAccount = ({currency_code, transaction_type, deposit_amount, withdrawal_amount, conclusion_status, transaction_date}) => {
//   const transactionText = transaction_type === "buy" ? "살래요" : "팔래요";
//   const borderColor = transaction_type === "buy" ? "border-red-600" : "border-blue-600";
//   return (
//     <div>
//       <Text className={`flex justify-center w-[60px] border ${borderColor} rounded-sm mt-5`}>
//         {transactionText}
//       </Text>
//       <div className="flex justify-between items-center">
//         <div className="flex items-center mt-3">
//           <Image
//             src={countryMapperFunction(currency_code).image}
//             className="h-[28px] w-[28px]"
//           ></Image>
//           <Text className="ml-3 font-medium text-2xl">{currency_code} {deposit_amount}</Text>
//         </div>
//         <Text className="font-medium text-2xl">거래완료</Text>
//       </div>
//       <div className="flex justify-between">
//         <div className="flex justify-between">
//           <div className="w-[42px]"></div>
//           <Text className="text-lg text-slate-500">{withdrawal_amount}</Text>
//         </div>
//         <Text className="text-slate-500">{transaction_date}</Text>
//       </div>
//       <div className='border'></div>
//     </div>
//   );
// };

// export default TransactionExchangeAccount;
import React from "react";
import { Text, Image } from "@chakra-ui/react";
import { countryMapperFunction } from '../data/countryMapper';

const TransactionExchangeAccount = ({
  currency_code, 
  transaction_type, 
  deposit_amount, 
  withdrawal_amount, 
  conclusion_status, 
  transaction_date
}) => {
  // 거래 유형에 따른 텍스트 및 테두리 색상 결정
  const transactionText = transaction_type === "buy" ? "살래요" : "팔래요";
  const borderColor = transaction_type === "buy" ? "border-red-600" : "border-blue-600";

  return (
    <div>
      {/* 거래 유형에 따른 텍스트 및 테두리 색상 */}
      <Text className={`flex justify-center w-[60px] border ${borderColor} rounded-sm mt-5`}>
        {transactionText}
      </Text>

      <div className="flex justify-between items-center">
        <div className="flex items-center mt-3">
          {/* 국가 이미지 */}
          <Image
            src={countryMapperFunction(currency_code).image}
            className="h-[28px] w-[28px]"
          />

          {/* transaction_type에 따른 금액 표시 */}
          {transaction_type === "buy" ? (
            <Text className="ml-3 font-medium text-2xl">
              {currency_code} {deposit_amount} {/* buy일 때는 deposit_amount */}
            </Text>
          ) : (
            <Text className="ml-3 font-medium text-2xl">
              {currency_code} {withdrawal_amount} {/* sell일 때는 withdrawal_amount */}
            </Text>
          )}
        </div>
        <Text className="font-medium text-2xl">거래완료</Text>
      </div>

      <div className="flex justify-between">
        <div className="flex justify-between">
          <div className="w-[42px]"></div>

          {/* transaction_type에 따른 다른 금액 표시 */}
          {transaction_type === "buy" ? (
            <Text className="text-lg text-slate-500">
              {withdrawal_amount} {/* buy일 때는 withdrawal_amount */}
            </Text>
          ) : (
            <Text className="text-lg text-slate-500">
              {deposit_amount} {/* sell일 때는 deposit_amount */}
            </Text>
          )}
        </div>

        {/* 거래 날짜 표시 */}
        <Text className="text-slate-500">{transaction_date}</Text>
      </div>

      <div className="border"></div>
    </div>
  );
};

export default TransactionExchangeAccount;
