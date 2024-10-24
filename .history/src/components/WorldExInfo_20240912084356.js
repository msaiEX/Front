import React from "react";
import { Text, Image } from '@chakra-ui/react'
import { FaRegStar } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
const WorldExInfo = () => {
  return (
    <div>
      <div className="w-full text-center flex">
        <div className="w-[20%] flex gap-1 justify-center items-center">
          <FaRegStar size={28} />
          <Image
            className="h-[28px] w-[28px]"
            src="/image/usd_flag.png"
          ></Image>
          <Text>미국 USD</Text>
        </div>
        <Text className="w-[20%]">1,338.70</Text>
        <Text className="w-[20%]">1,351.80</Text>
        <Text className="w-[20%]">1,325.60</Text>
        <div className="w-[20%] flex p-1 bg-slate-500 justify-center items-center">
          <IoMdArrowDropup />
          <Text>2.14</Text>
        </div>
      </div>
    </div>
  );
};

export default WorldExInfo;
