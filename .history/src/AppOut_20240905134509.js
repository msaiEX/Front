import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'

const AppOut = () => {
  return (
    <>
      <div className='w-screen flex justify-center bg-background'>
        <NavBar />
      </div>
      <div className='w-screen flex justify-center bg-background'>
        <Outlet />
      </div>
    </>
  )
}

export default AppOut
