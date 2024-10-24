import React from "react";
import { Text, Image } from '@chakra-ui/react';
import { FaRegStar, FaStar } from "react-icons/fa";  // FaStar는 선택된 상태

const WorldExInfo = ({ currency, baseRate, remitSend, remitReceive, updownRate, isSelected }) => {
  return (
    <div className="w-full text-center flex">
      <div className="w-[20%] flex gap-1 justify-start items-center">
        {/* 선택 여부에 따라 별 모양과 색상 변경 */}
        {isSelected ? <FaStar size={32} color="orange" /> : <FaRegStar size={32} color="gray"/>}
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
      <div className="w-[20%] flex p-1 bg-slate-500 justify-center items-center">
        <Text className="w-[72px] bg-slate-200 ">{updownRate}%</Text>
      </div>
    </div>
  );
};

export default WorldExInfo;
