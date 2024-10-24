import React from 'react'

const Menu = ({menu_name}) => {
  return (
    <div className='w-[180px] h-10 text-center rounded-full text-slate-800 leading-10 hover:bg-slate-700 hover:text-slate-50 transition duration-150 ease-in-out'>
      {menu_name}
    </div>
  )
}

export default Menu
