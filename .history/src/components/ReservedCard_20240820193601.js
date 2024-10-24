import React from 'react'
import { Image, Divider } from "@chakra-ui/react";
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
      <div className='flex mb-5'>
        <div>1,357.14</div>
        <div>2024-08-17 13:23</div>
      </div>
      <Divider />
    </div>
  )
}

export default ReservedCard
