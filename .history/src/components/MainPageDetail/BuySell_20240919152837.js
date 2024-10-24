import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
const BuySell = ({ currentInvestPrice, currentSellPrice, increase }) => {
  return (
    <div className="w-full flex justify-center py-2 rounded-lg my-2 bg-slate-100">
      <Stat className="flex justify-center">
        <StatLabel>내가 살 때</StatLabel>
        <StatNumber>{currentInvestPrice}</StatNumber>

        <StatHelpText>
          <StatArrow type="increase" />
          {increase}
        </StatHelpText>
      </Stat>

      <Stat className="flex justify-center">
        <StatLabel>내가 팔 때</StatLabel>
        <StatNumber>{currentSellPrice}</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          {increase}
        </StatHelpText>
      </Stat>
    </div>
  );
};

export default BuySell;
