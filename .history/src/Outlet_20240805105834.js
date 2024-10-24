
import React from 'react'
import NavBar from './components/NavBar'

const Outlet = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Outlet