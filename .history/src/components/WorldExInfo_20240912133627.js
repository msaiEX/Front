// import React from "react";
// import { Text, Image } from '@chakra-ui/react';
// import { FaRegStar, FaStar } from "react-icons/fa";  // FaStar는 선택된 상태
// import { IoMdArrowDropup } from "react-icons/io";
// import { IoMdArrowDropdown } from "react-icons/io";
// const WorldExInfo = ({ currency, baseRate, remitSend, remitReceive, updownRate, isSelected }) => {
//   return (
//     <div className="w-full text-center flex mb-2">
//       <div className="w-[20%] flex gap-1 justify-start items-center">
//         {/* 선택 여부에 따라 별 모양과 색상 변경 */}
//         {isSelected ? <FaStar size={24} color="orange" /> : <FaRegStar size={24} color="gray"/>}
//         <Image
//           className="h-[24px] w-[24px]"
//           src="/image/usd_flag.png"
//           alt={currency}
//         />
//         <Text className='font-semibold'>{currency}</Text>
//       </div>
//       <Text className="w-[20%] font-semibold">{baseRate}</Text>
//       <Text className="w-[20%] font-semibold">{remitSend}</Text>
//       <Text className="w-[20%] font-semibold">{remitReceive}</Text>
//       <div className="w-[20%] flex p-1 justify-center items-center">
//         <div className='flex w-[72px] items-center bg-red-500 px-1 rounded-sm'>
//           <IoMdArrowDropup color='red'/>
//           <Text className='text-white'>{updownRate}%</Text>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default WorldExInfo;
import React from "react";
import { Text, Image } from '@chakra-ui/react';
import { FaRegStar, FaStar } from "react-icons/fa";  // FaStar는 선택된 상태
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";  // up, down 아이콘

const WorldExInfo = ({ currency, baseRate, remitSend, remitReceive, updownRate, isSelected }) => {
  // updownRate가 양수인지 음수인지 판단
  const isRatePositive = parseFloat(updownRate) > 0;

  return (
    <div className="w-full text-center flex mb-2">
      <div className="w-[20%] flex gap-1 justify-start items-center">
        {/* 선택 여부에 따라 별 모양과 색상 변경 */}
        {isSelected ? <FaStar size={24} color="orange" /> : <FaRegStar size={24} color="gray"/>}
        <Image
          className="h-[24px] w-[24px]"
          src="/image/usd_flag.png"
          alt={currency}
        />
        <Text className='font-semibold'>{currency}</Text>
      </div>
      <Text className="w-[20%] font-semibold">{baseRate}</Text>
      <Text className="w-[20%] font-semibold">{remitSend}</Text>
      <Text className="w-[20%] font-semibold">{remitReceive}</Text>
      <div className="w-[20%] flex p-1 justify-center items-center">
        {/* updownRate가 양수일 때와 음수일 때 다른 스타일 적용 */}
        <div className={`flex w-[72px] items-center ${isRatePositive ? 'bg-red-500' : 'bg-blue-500'} px-1 rounded-sm`}>
          {isRatePositive ? (
            <IoMdArrowDropup color='red' />
          ) : (
            <IoMdArrowDropdown color='blue' />
          )}
          <Text className='text-white'>{updownRate}%</Text>
        </div>
      </div>
    </div>
  );
};

export default WorldExInfo;
