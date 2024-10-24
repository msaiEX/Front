import React from 'react'
import { Text, Image } from "@chakra-ui/react";

const StockBox = () => {
  return (
    <div className='w-[180px] px-5 py-3 flex flex-col items-center bg-slate-100'>
      <Image className='w-[84px] h-[84px] rounded-full' src='/image/hana.png'/>
      <Text className='text-lg font-medium'>현대로템</Text>
      <Text>39,450</Text>
      <Text className='text-sm'>+1.883(2.6%)</Text>

      <div className=''>
        <Text>자세히 보기</Text>
      </div>
    </div>
  )
}

export default StockBox
