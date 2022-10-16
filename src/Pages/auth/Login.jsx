import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
     <div className="auth-container ">
           
            
    <div className="form-container sign-in-container">
                <form action="#">
                    <h1 style={{paddingBottom: '15px'}}> Login Now</h1>
                    <input type="email" name="email" placeholder="Email"  style={{borderRadius: '15px'}}/>
                    <input type="password" name="password" placeholder="Password"  style={{borderRadius: '15px'}}/>
                    <a href="#" style={{paddingLeft:'150px', fontWeight: 'bold'}}> Forgot Your Password?</a>
                    <button style={{marginTop: '10px'}}> Let Me In...</button>
                    <h5>New to here!
                         <Link className="ghost" id="signUp" style={{color:'blue'}} to='/auth/signup' ><u>Sign Up</u></Link></h5>
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

export default Login