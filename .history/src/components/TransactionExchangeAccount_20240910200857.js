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

const TransactionExchangeAccount = ({
  currency_code, 
  transaction_type, 
  deposit_amount, 
  withdrawal_amount, 
  conclusion_status, 
  transaction_date
}) => {
  return (
    <div>
      {/* 거래 유형에 따른 텍스트와 테두리 색상 적용 */}
      <Text className={`flex justify-center w-[60px] border ${transaction_type === 'buy' ? 'border-red-600' : 'border-blue-600'} rounded-sm mt-3`}>
        {transaction_type === 'buy' ? '살래요' : '팔래요'}
      </Text>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center mt-3">
          <Image
            src="/image/usd_flag.png"
            className="h-[28px] w-[28px]"
          />
          
          {/* transaction_type이 buy면 deposit_amount 표시, sell이면 withdrawal_amount 표시 */}
          {transaction_type === 'buy' ? (
            <Text className="ml-3 font-medium text-2xl">{currency_code} {deposit_amount}</Text>
          ) : (
            <Text className="ml-3 font-medium text-2xl">{currency_code} {withdrawal_amount}</Text>
          )}
        </div>
        <Text className="font-medium text-2xl">거래완료</Text>
      </div>
      
      <div className="flex justify-between">
        <div className="flex justify-between">
          <div className="w-[42px]"></div>
          
          {/* transaction_type이 buy면 withdrawal_amount 표시, sell이면 deposit_amount 표시 */}
          {transaction_type === 'buy' ? (
            <Text className="text-lg text-slate-500">{withdrawal_amount}</Text>
          ) : (
            <Text className="text-lg text-slate-500">{deposit_amount}</Text>
          )}
        </div>

        <Text className="text-slate-500">{transaction_date}</Text>
      </div>
      
      <div className="border"></div>
    </div>
  );
};

export default TransactionExchangeAccount;
