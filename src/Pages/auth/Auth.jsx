import React from 'react'
import { Outlet } from 'react-router-dom'

import './styles.css'

function Auth() {
  return (
    <>    
    <div className="auth-body">

            <Outlet/>
    </div>
        
        </>
  )
}

export default Auth