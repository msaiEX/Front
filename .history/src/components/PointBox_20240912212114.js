import React from 'react'
import { Text, Image } from "@chakra-ui/react";

const PointBox = () => {
  return (
    <div className='w-[186px] h-56 px-5 py-3 flex flex-col items-center bg-slate-100 rounded-md'>
      <Image className='w-10 h-10 rounded-full' src='/image/hana.png'/>
      <Text className='text-sm pt-2 font-semibold'>환율변동성</Text>
      <Text className='text-sm'>2024년을 기준으로 원/달러 환율은 1,300원 내외에서 상당한 변동성을 보일 것으로 예상됩니다​(semi2024). 글로벌 경제 상황, 특히 미국 경제의 성장 전망과 연준의 금리 정책 변화에 따라 원화의 가치가 크게 좌우될 수 있으므로, 투자자는 환율 변동에 대비한 포트폴리오 전략을 세워야 합니다. </Text>
      <div className='py-1 px-3 mt-2 bg-slate-300 rounded-sm'>
        <Text>자세히 보기</Text>
      </div>
    </div>
  )
}

export default PointBox
