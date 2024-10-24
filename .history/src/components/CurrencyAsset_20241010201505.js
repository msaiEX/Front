import React from "react";
import { Text, Image } from "@chakra-ui/react";

const CurrencyAsset = ({
  currencyCode,
  imageSrc,
  amount,
  exchangeAmount,
  convertedAmount,
  averageExchangeRate,
  currentSellAmount,
  expectedExchangeRate,
  expectedProfit,
  expectedProfitRate,
}) => {
  return (
    <div className="bg-white w-full rounded-2xl">
      {/* 보유자산 */}
      <div className="flex justify-between">
        <Text className="text-2xl font-bold">보유자산</Text>
        <div className="flex gap-1 items-center">
          <Image className="w-[24px] h-[24px]" src={imageSrc} alt={`${currencyCode} Flag`} />
          <Text className="text-2xl font-bold">{currencyCode}</Text>
          <Text className="text-2xl font-bold">{amount}</Text>
        </div>
      </div>

      <div className="border my-3"></div>

      {/* 외화대가외화금액 */}
      <div className="flex justify-between">
        <Text className="text-xl font-medium">외화대가외화금액 ({currencyCode})</Text>
        <div className="flex gap-1">
          <Text className="text-xl font-medium">{currencyCode}</Text>
          <Text className="text-xl font-medium">{exchangeAmount}</Text>
        </div>
      </div>

      {/* 환산금액 */}
      <div className="flex justify-between">
        <Text className="text-xl font-medium">환산금액 ({currencyCode})</Text>
        <Text className="text-xl font-medium">{convertedAmount}원</Text>
      </div>

      {/* 평균 적용 환율 */}
      <div className="flex justify-between">
        <Text className="text-slate-600">평균적용환율 ({currencyCode})</Text>
        <Text className="text-slate-600">{averageExchangeRate}원</Text>
      </div>

      <div className="border my-3"></div>

      {/* 지금 팔면 */}
      <div className="flex justify-between">
        <Text className="text-xl font-medium">지금 팔면 ({currencyCode})</Text>
        <Text className="text-xl font-medium">{currentSellAmount}원</Text>
      </div>

      {/* 예상 적용 환율 */}
      <div className="flex justify-between">
        <Text className="text-slate-600">예상적용환율 ({currencyCode})</Text>
        <Text className="text-slate-600">{expectedExchangeRate}</Text>
      </div>

      {/* 예상 수익금 */}
      <div className="flex justify-between">
        <Text>예상수익금 ({currencyCode})</Text>
        <Text className='font-bold' color={expectedProfit >= 0 ? "red.500" : "blue.500"}>{expectedProfit}원</Text>
      </div>

      {/* 예상 수익률 */}
      <div className="flex justify-between">
        <Text>예상수익률 ({currencyCode})</Text>
        <Text className='font-bold' color={expectedProfit >= 0 ? "red.500" : "blue.500"}>{expectedProfitRate}%</Text>
      </div>
    </div>
  );
};

export default CurrencyAsset;
