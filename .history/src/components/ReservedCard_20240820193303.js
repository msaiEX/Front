import React from 'react'
import { Image } from "@chakra-ui/react";
const ReservedCard = () => {
  return (
    <div>
      <div className='flex'>
        <div>살래요</div>
        <div>예약</div>
      </div>
      <div className='flex'>
        <div>
          <Image />
          <div>USD 1</div>
        </div>
        <div>예약완료</div>
      </div>
    </div>
  )
}

export default ReservedCard
