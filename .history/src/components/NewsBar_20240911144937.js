import React from "react";
import { Text, Image } from "@chakra-ui/react";
const NewsBar = ({ state, result, url, title, content, imageUrl }) => {
  function truncateText(text, maxLength = 50) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }
  //bg-[#EAF2EF]
  return (
    <div className='w-full flex justify-center py-2 px-10 mb-4 rounded-2xl bg-white'>
      <div className="w-full flex justify-between items-center gap-3">
        {/* text box */}
        <div name="textbox">
          <div className="flex gap-1 mt-1">
            <Text className='text-sm font-bold'>{state}/KRW</Text>
            <Text className='text-sm font-bold text-red-500'>{result}</Text>
          </div>
          <Text className='text-sm mt-1'>{title}</Text>
          <Text className='text-xs mt-1 text-slate-600'>
          {truncateText(content)}
          </Text>
          <Text className='text-xs mt-1 text-slate-600'>매일경제</Text>
        </div>
        <div className='w-[68px] h-[68px] bg-white'>
          <Image
            src={imageUrl}
            className="w-[68px] h-[68px] rounded-2xl"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default NewsBar;
