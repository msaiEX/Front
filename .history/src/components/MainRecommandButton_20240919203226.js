import React from 'react'

const MainRecommandButton = ({text, scrollToSection}) => {
  return (
    <div className='py-1 rounded-md mb-2 cursor-pointer font-semibold' onClick={scrollToSection}>
      {text}
    </div>
  )
}

export default MainRecommandButton
