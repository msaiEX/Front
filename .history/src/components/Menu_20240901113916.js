import React from 'react'
import { Text } from "@chakra-ui/react";

const Menu = ({menu_name}) => {
  return (
    <div className='w-[180px] h-10 text-center rounded-full text-slate-800 leading-10 hover:bg-slate-700 hover:text-slate-50 transition duration-150 ease-in-out'>
      <Text className='font-semibold'>{menu_name}</Text>
    </div>
  )
}

export default Menu
