import React from 'react'
import { Outlet } from 'react-router-dom'

function NavContainer() {
  return (
    <div>nav-container
    <Outlet/>
    </div>
  )
}

export default NavContainer