import React from 'react'
import { Text, Image } from "@chakra-ui/react";

const StockBox = () => {
  return (
    <div className='w-[180px] px-5 py- flex flex-col items-center bg-slate-100'>
      <Image className='w-[72px] h-[72px] rounded-full' src='/image/hana.png'/>
      <Text className='text-lg'>현대로템</Text>
      <Text>39,450</Text>
      <Text className='text-sm'>+1.883(2.6%)</Text>

      <div>
        <Text>장세히 보기</Text>
      </div>
    </div>
  )
}

export default StockBox
