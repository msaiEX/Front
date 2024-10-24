import React from "react";
import { Text, Image } from '@chakra-ui/react'
import { FaRegStar } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
const WorldExInfo = ({currency, baseRate, remitSend, remitReceive}) => {
  return (
    <div>
      <div className="w-full text-center flex">
        <div className="w-[20%] flex gap-1 justify-start items-center">
          <FaRegStar size={28} />
          <Image
            className="h-[28px] w-[28px]"
            src="/image/usd_flag.png"
          ></Image>
          <Text>{currency}</Text>
        </div>
        <Text className="w-[20%]">{baseRate}</Text>
        <Text className="w-[20%]">{remitSend}</Text>
        <Text className="w-[20%]">{remitReceive}</Text>
        <div className="w-[20%] flex p-1 bg-slate-500 justify-center items-center">
          <IoMdArrowDropup />
          <Text>2.14</Text>
        </div>
      </div>
    </div>
  );
};

export default WorldExInfo;
