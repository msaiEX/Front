import React from 'react'

const MainRecommandButton = ({text, scrollToSection}) => {
  return (
    <div className='flex'>
      <div className='rounded-md my-2 mr-1 cursor-pointer leading-0' onClick={scrollToSection}>
        {text}
      </div>
    </div>
  )
}

export default MainRecommandButton
