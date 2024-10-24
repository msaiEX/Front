import React from 'react'
import { Text, Image } from "@chakra-ui/react";

const Account = () => {
  return (
    <div className='flex justify-between items-center px-3 py-2 mb-2 rounded-md bg-slate-300'>
      <div name='img-name' className='flex gap-2'>
        <Image className='w-8 h-8' src={process.env.PUBLIC_URL +'/image/hana.png'}/>
        <Text className='text-xl leading-0 font-medium'>하나 빌리언달러 통장</Text>
      </div>
      <div className='py-1 px-3 bg-slate-100 rounded-sm'>
        <Text>자세히보기</Text>
      </div>
    </div>
  )
}

export default Account
