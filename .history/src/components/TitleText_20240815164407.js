import React from 'react'
import { Text } from "@chakra-ui/react";
const TitleText = ({title}) => {
  return (
    <Text className='text-2xl my-4 font-semibold'>{title}</Text>
  )
}

export default TitleText
