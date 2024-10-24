import React from 'react'
import {
  Image
} from "@chakra-ui/react"
import { HiOutlineDocumentReport } from "react-icons/hi";
const MainRecommandButton = ({text, scrollToSection}) => {
  return (
    <div className='flex'>
      <div className='rounded-md mb-2 mr-1 cursor-pointer leading-0' onClick={scrollToSection}>
        {text}
      </div>
    </div>
  )
}

export default MainRecommandButton
