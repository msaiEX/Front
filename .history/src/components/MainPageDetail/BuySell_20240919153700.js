// import React from "react";
// import {
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatHelpText,
//   StatArrow,
// } from "@chakra-ui/react";
// const BuySell = ({ currentInvestPrice, currentSellPrice, increase }) => {
//   return (
//     <div className="w-full flex justify-center py-2 rounded-lg my-2 bg-slate-100">
//       <Stat className="flex justify-center">
//         <StatLabel>내가 살 때</StatLabel>
//         <StatNumber>{currentInvestPrice}</StatNumber>

//         <StatHelpText>
//           <StatArrow type="increase" />
//           {increase}
//         </StatHelpText>
//       </Stat>

//       <Stat className="flex justify-center">
//         <StatLabel>내가 팔 때</StatLabel>
//         <StatNumber>{currentSellPrice}</StatNumber>
//         <StatHelpText>
//           <StatArrow type="increase" />
//           {increase}
//         </StatHelpText>
//       </Stat>
//     </div>
//   );
// };

// export default BuySell;

import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

const BuySell = ({ currentInvestPrice, currentSellPrice, increase }) => {
  // 'increase' 값을 숫자로 변환 (퍼센트 기호 제거)
  const parsedIncrease = parseFloat(increase?.toString().replace('%', ''));

  // 'increase' 값이 양수인지 음수인지 판단
  const isPositive = !isNaN(parsedIncrease) && parsedIncrease >= 0;

  // 색상 설정: 양수면 빨간색, 음수면 파란색
  const color = isPositive ? "red.500" : "blue.500";

  // 표시할 'increase' 값 포맷 (퍼센트 기호 추가)
  const displayIncrease = isNaN(parsedIncrease) ? "N/A" : `${parsedIncrease}%`;

  return (
    <div className="w-full flex justify-center py-2 rounded-lg my-2 bg-slate-100">
      {/* 내가 살 때 섹션 */}
      <Stat className="flex flex-col items-center mx-4">
        <StatLabel>내가 살 때</StatLabel>
        <StatNumber>{currentInvestPrice}원</StatNumber>

        <StatHelpText color={color} className="flex items-center">
          <StatArrow type={isPositive ? "increase" : "decrease"} />
          {displayIncrease}
        </StatHelpText>
      </Stat>

      {/* 내가 팔 때 섹션 */}
      <Stat className="flex flex-col items-center mx-4">
        <StatLabel>내가 팔 때</StatLabel>
        <StatNumber>{currentSellPrice}원</StatNumber>
        <StatHelpText color={color} className="flex items-center">
          <StatArrow type={isPositive ? "increase" : "decrease"} />
          {displayIncrease}
        </StatHelpText>
      </Stat>
    </div>
  );
};

export default BuySell;
