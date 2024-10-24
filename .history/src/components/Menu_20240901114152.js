import React from 'react'
import { Text } from "@chakra-ui/react";

const Menu = ({menu_name}) => {
  return (
    <div className='w-[150px] text-center rounded-full text-slate-800 leading-10 hover:bg-slate-700 hover:text-slate-50 transition duration-150 ease-in-out'>
      <Text className='font-medium'>{menu_name}</Text>
    </div>
  )
}

export default Menu
