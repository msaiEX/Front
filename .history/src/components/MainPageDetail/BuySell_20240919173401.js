// import React from "react";
// import {
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatHelpText,
//   Text
// } from "@chakra-ui/react";
// import { IoMdArrowDropup } from "react-icons/io";  // 업 아이콘
// import { MdArrowDropDown } from "react-icons/md";  // 다운 아이콘

// const BuySell = ({ currentInvestPrice, currentSellPrice, increase, originInvestPrice, originSellPrice}) => {
//   // 'increase' 값을 숫자로 변환 (퍼센트 기호 제거)
//   const parsedIncrease = parseFloat(increase?.toString().replace('%', ''));

//   // 'increase' 값이 양수인지 음수인지 판단
//   const isPositive = !isNaN(parsedIncrease) && parsedIncrease >= 0;

//   // 아이콘 색상 설정: 양수면 빨간색, 음수면 파란색
//   const iconColor = isPositive ? "red" : "blue";

//   // 표시할 'increase' 값 포맷 (퍼센트 기호 추가)
//   const displayIncrease = isNaN(parsedIncrease) ? "N/A" : `${parsedIncrease}%`;

//   return (
//     <div className="w-full flex justify-center py-2 rounded-lg my-2 bg-slate-100">
//       {/* 내가 살 때 섹션 */}
//       <Stat className="flex flex-col items-center mx-4">
//         <StatLabel>내가 살 때</StatLabel>
//         <StatNumber>{currentInvestPrice}원</StatNumber>
//         <div className='flex'>
//           <Text className=' text-slate-500 font-semibold'>{originInvestPrice}</Text>
//           <StatHelpText className="flex items-center">
//             {/* increase 값에 따라 아이콘 표시 */}
//             {isPositive ? (
//               <IoMdArrowDropup color={iconColor} size={24} />
//             ) : (
//               <MdArrowDropDown color={iconColor} size={24} />
//             )}
//             <Text className='text-sm font-semibold'>{displayIncrease}</Text>
//           </StatHelpText>
//         </div>
//       </Stat>

//       {/* 내가 팔 때 섹션 */}
//       <Stat className="flex flex-col items-center">
//         <StatLabel>내가 팔 때</StatLabel>
//         <StatNumber>{currentSellPrice}원</StatNumber>
//         <div className='flex'>
//           <Text className=' text-slate-500 font-semibold'>{originSellPrice}</Text>
//           <StatHelpText className="flex items-center">
//             {/* increase 값에 따라 아이콘 표시 */}
//             {isPositive ? (
//               <IoMdArrowDropup color={iconColor} size={24} />
//             ) : (
//               <MdArrowDropDown color={iconColor} size={24} />
//             )}
//             <Text className='text-sm font-semibold'>{displayIncrease}</Text>
//           </StatHelpText>
//         </div>
//       </Stat>
//     </div>
//   );
// };

// export default BuySell;

import React from "react";
import { Text } from "@chakra-ui/react";
import { IoMdArrowDropup } from "react-icons/io";  // 업 아이콘
import { MdArrowDropDown } from "react-icons/md";  // 다운 아이콘

const BuySell = ({ currentInvestPrice, currentSellPrice, increase, originInvestPrice, originSellPrice }) => {
  // 'increase' 값을 숫자로 변환 (퍼센트 기호 제거)
  const parsedIncrease = parseFloat(increase?.toString().replace('%', ''));

  // 'increase' 값이 양수인지 음수인지 판단
  const isPositive = !isNaN(parsedIncrease) && parsedIncrease >= 0;

  // 아이콘 색상 설정: 양수면 빨간색, 음수면 파란색
  const iconColor = isPositive ? "red" : "blue";

  // 표시할 'increase' 값 포맷 (퍼센트 기호 추가)
  const displayIncrease = isNaN(parsedIncrease) ? "N/A" : `${parsedIncrease}%`;

  return (
    <div className="w-full flex justify-center py-2 rounded-lg my-2 bg-slate-100">
      {/* 내가 살 때 섹션 */}
      <div className="flex flex-col items-center mx-4">
        <span className="font-semibold text-lg">내가 살 때</span>
        <span className="text-2xl font-bold">{currentInvestPrice}원</span>
        <div className='flex items-center'>
          <Text className=' text-slate-500 font-semibold'>{originInvestPrice}원</Text>
          <div className="flex items-center ml-2">
            {/* increase 값에 따라 아이콘 표시 */}
            {isPositive ? (
              <IoMdArrowDropup color={iconColor} size={24} />
            ) : (
              <MdArrowDropDown color={iconColor} size={24} />
            )}
            <Text className='text-sm font-semibold ml-1'>{displayIncrease}</Text>
          </div>
        </div>
      </div>

      {/* 내가 팔 때 섹션 */}
      <div className="flex flex-col items-center">
        <span className="font-semibold text-lg">내가 팔 때</span>
        <span className="text-2xl font-bold">{currentSellPrice}원</span>
        <div className='flex items-center'>
          <Text className=' text-slate-500 font-semibold'>{originSellPrice}원</Text>
          <div className="flex items-center ml-2">
            {/* increase 값에 따라 아이콘 표시 */}
            {isPositive ? (
              <IoMdArrowDropup color={iconColor} size={24} />
            ) : (
              <MdArrowDropDown color={iconColor} size={24} />
            )}
            <Text className='text-sm font-semibold ml-1'>{displayIncrease}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
