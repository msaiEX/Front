import React from 'react'
import { Text, Image } from "@chakra-ui/react";

const StockBox = () => {
  return (
    <div className='w-60 px-5 py-3 flex flex-col items-center bg-slate-100 rounded-md'>
      <Image className='w-[72px] h-[72px] rounded-full' src='/image/hana.png'/>
      <Text className='text-lg pt-2 font-medium'>현대로템</Text>
      <Text className='text-xl'>39,450</Text>
      <Text className='text-sm font-semibold text-red-600'>+1.883(2.6%)</Text>

      <div className='py-1 px-3 mt-2 bg-slate-300 rounded-sm'>
        <Text>자세히 보기</Text>
      </div>
    </div>
  )
}

export default StockBox
