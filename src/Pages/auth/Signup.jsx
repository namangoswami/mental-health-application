import React from 'react'
import {Link } from 'react-router-dom'

function Signup() {
  return (
     <div className="auth-container right-panel-active" id="container">
    <div className="form-container sign-up-container">
    <form action="" >
        <h1 style={{paddingTop: '15px'}}> Create Account</h1>
        <input type="text" name="fname" placeholder="First Name" style={{borderRadius: '15px'}}/>
        <input type="text" name="lname" placeholder="Last Name" style={{borderRadius: '15px'}}/>
        <input type="text" name="address" placeholder="Address"  style={{borderRadius: '15px'}}/>
        <input type="password" name="password" placeholder="Password"  style={{borderRadius: '15px'}}/>
        <input type="text" name="phone" placeholder="Phone Number"  style={{borderRadius: '15px'}}/>
        <input type="number" name="age" placeholder="Age"  style={{borderRadius: '15px'}}/>
        <button style={{marginTop:'10px'}}> Create Account</button>
        <h5>Already have an account! <Link className="ghost" id="signIn" to='/auth/login' style={{color:'blue'}}><u>Sign In</u></Link></h5>
    </form>
</div>
<div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <img src="https://images.unsplash.com/photo-1556386734-4227a180d19e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxoZWFsdGh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="photo-2" height="480" width="500"/>
                        
                        
                    </div>
                    <div className="overlay-panel overlay-right">
                        <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80" alt="photo-2" height="480" width="500"/>
                    </div>
                </div>
                </div>
  )
}

export default Signup