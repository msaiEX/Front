import React from 'react'
import { Text, Image } from "@chakra-ui/react";

const PointBox = ({title, content}) => {
  return (
    <div className='w-[230px] h-[320px] px-5 py-3 flex flex-col items-center bg-slate-100 rounded-md'>
      <Image className='w-10 h-10 rounded-full' src='/image/hana.png'/>
      <Text className='text-sm pt-2 font-semibold mb-2'>{title}</Text>
      <Text className='text-sm'>
        {content}
      </Text>
    </div>
  )
}

export default PointBox
