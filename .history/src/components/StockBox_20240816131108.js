import React from 'react'
import { Text, Image } from "@chakra-ui/react";

const StockBox = () => {
  return (
    <div className='w-[100px] flex flex-col items-center bg-slate-100'>
      <Image className='rounded-full' src='/image/hana.png' boxSize={'48px'}/>
      <Text>현대로템</Text>
      <Text>39,450</Text>
      <Text>+1.883(2.6%)</Text>

      <div>
        <Text>장세히 보기</Text>
      </div>
    </div>
  )
}

export default StockBox
