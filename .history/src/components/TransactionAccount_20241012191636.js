import React from "react";
import { Text } from "@chakra-ui/react";

const TransactionAccount = ({ currency_code, transaction_date, transaction_type, withdrawal_amount, deposit_amount, balance }) => {

  // 금액을 조건부로 설정
  const formattedAmount = transaction_type === "buy" 
    ? `-${withdrawal_amount}`
    : `+${deposit_amount}`;

  // 금액 색상 설정
  const amountColor = transaction_type === "buy" ? "red.500" : "blue.500";

  // 공백을 기준으로 날짜와 시간을 분리
  const [date, time] = transaction_date.split(" ");

  return (
    <div>
      <Text>{date}</Text>
      <div className="border bg-slate-600 my-2"></div>
      <div className="w-full justify-between my-3 flex">
        <Text>{time}</Text>
        <Text>대체</Text>
      </div>
      <Text className="text-2xl">FX마켓 {currency_code} 살래요</Text>
      <Text className={`flex justify-end font-semibold text-3xl`} color={amountColor}>
        {formattedAmount} {/* 조건에 맞는 금액 표시 */}
      </Text>
      <Text name="balance" className="flex justify-end">
        {balance.toLocaleString('en-US')} 원 {/* 각 거래 후의 잔액 표시 */}
      </Text>
      <div className="border bg-slate-600 my-3"></div>
    </div>
  );
};

export default TransactionAccount;
