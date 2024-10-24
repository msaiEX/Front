import React from 'react'
import {
  Image
} from "@chakra-ui/react"
import { HiOutlineDocumentReport } from "react-icons/hi";
const MainRecommandButton = ({text, scrollToSection}) => {
  return (
    <div className='flex'>
      <div className='rounded-md mb-2 mr-1 cursor-pointer font-semibold leading-0 ' onClick={scrollToSection}>
        {text}
      </div>
      {/* <Image className='w-[24px] h-[24px]' src={src}>

      </Image> */}
      <HiOutlineDocumentReport />
    </div>
  )
}

export default MainRecommandButton
