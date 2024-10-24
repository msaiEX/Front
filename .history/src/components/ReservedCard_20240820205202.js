import React from 'react'
import { Image, Divider } from "@chakra-ui/react";
const ReservedCard = ({type, date, value, rangeDate}) => {
  return (
    <div>
      <div className='flex'>
        <div>{type}</div>
        <div>예약</div>
      </div>
      <div className='flex'>
        <div>
          <Image />
          <div>USD 1</div>
        </div>
        <div>예약완료</div>
      </div>
      <div className='flex mb-3'>
        <div>{value}</div>
        <div>{date}</div>
      </div>
      <div>{rangeDate.startDate}</div>
      <div>{rangeDate.endDate}</div>
      <Divider />
    </div>
  )
}

export default ReservedCard
