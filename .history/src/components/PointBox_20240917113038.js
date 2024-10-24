import React from 'react'
import { Text, Image } from "@chakra-ui/react";

const PointBox = () => {
  return (
    <div className='w-[200px] h-[320px] px-5 py-3 flex flex-col items-center bg-slate-100 rounded-md'>
      <Image className='w-10 h-10 rounded-full' src='/image/hana.png'/>
      <Text className='text-sm pt-2 font-semibold'>환율변동성</Text>
      <Text className='text-sm'>
        2024년 원/달러 환율은 1,300원에서 1,400원 사이에서 변동될 것으로 예상됩니다.
        특히 미국 경제 지표의 영향을 많이 받을 것이며, 금리 차와 무역 흑자에 따라 원화의 약세 또는 강세가 나타날 수 있습니다.
        해외 투자자들은 원화 환율의 변동성을 주목하여 투자 전략을 세워야 합니다.
      </Text>
    </div>
  )
}

export default PointBox
