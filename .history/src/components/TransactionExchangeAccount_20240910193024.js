import React from "react";
import { Text, Image } from "@chakra-ui/react";

const TransactionExchangeAccount = ({currency_code, transaction_type, deposit_amount, withdrawal_amount, conclusion_status, transaction_date}) => {
  return (
    <div>
      <Text className="flex justify-center w-[60px] border border-red-600 rounded-sm mt-3">
        살래요
      </Text>
      <div className="flex justify-between items-center">
        <div className="flex items-center mt-3">
          <Image
            src="/image/usd_flag.png"
            className="h-[28px] w-[28px]"
          ></Image>
          <Text className="ml-3 font-medium text-2xl">{currency_code} {deposit_amount}</Text>
        </div>
        <Text className="font-medium text-2xl">거래완료</Text>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between">
          <div className="w-[42px]"></div>
          <Text className="text-lg text-slate-500">{withdrawal_amount}</Text>
        </div>

        <Text className="text-slate-500">{transaction_date}</Text>
      </div>
      <div className='border'></div>
    </div>
  );
};

export default TransactionExchangeAccount;
