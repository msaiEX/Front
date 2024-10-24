import React from 'react'
import {
  Image
} from "@chakra-ui/react"

const MainRecommandButton = ({text, scrollToSection}) => {
  return (
    <div className='flex'>
      <div className='rounded-md mb-2 mr-1 cursor-pointer font-semibold leading-0 ' onClick={scrollToSection}>
        {text}
      </div>
      <Image className='w-[24px] h-[24px]' src='/image/chart_image.png'>

      </Image>
    </div>
  )
}

export default MainRecommandButton
