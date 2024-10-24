import React from "react";
import { Text, Image } from "@chakra-ui/react";
const TransactionExchangeAccount = () => {
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
          <Text className="ml-3 font-medium text-2xl">USD 2</Text>
        </div>
        <Text className="font-medium text-2xl">거래완료</Text>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between">
          <div className="w-[42px]"></div>
          <Text className="text-lg text-slate-500">1,346.92</Text>
        </div>

        <Text className="text-slate-500">2024-08-19 22:37</Text>
      </div>
      <div className='border'></div>
    </div>
  );
};

export default TransactionExchangeAccount;
