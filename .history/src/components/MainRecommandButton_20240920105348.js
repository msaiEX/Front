import React from 'react'
import {
  Image
} from "@chakra-ui/react"

const MainRecommandButton = ({text, scrollToSection}) => {
  return (
    <div className='flex items-center'>
      <div className='py-1 rounded-md mb-2 cursor-pointer font-semibold' onClick={scrollToSection}>
        {text}
      </div>
      <Image className='w-[24px] h-[24px]' src='/image/chart_image.png'>

      </Image>
    </div>
  )
}

export default MainRecommandButton
