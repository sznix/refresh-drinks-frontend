import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Exit from '../assets/img/exit button.svg'
import Home from './Home'
import { push } from 'connected-react-router'
import { signUp } from '../reducks/users/operations'

export default function Signup() {
  const dispatch = useDispatch()
  const close = () => {dispatch(push('/'))}
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  
  const inputUserName = (event) => {
    setUsername(event.target.value)
    
  }
  const inputEmail = (event) => {
    setEmail(event.target.value)

  }

  const inputPassword = (event) => {
    setPassword(event.target.value)
  }

  const signUpButton = () => {
    dispatch(signUp(username,email,password))
    setEmail('')
    setUsername('')
    setPassword('')
  }
  return (
    <>
        <section id="signup">
        <div class="signup-card">
            <img onClick={close} src={Exit} alt="" class="exitbutton"/>
            <h1 class="signupcardtitle">Create an account and 
                discover the benefits</h1>
            <p class="signupcarddescription">Sign up to create your order and discover the benefits of Refresh CoolDrinks</p>
            <input type="text" onChange={inputUserName} className='usernameandemail' placeholder="UserName"/>
            <input type="text" onChange={inputEmail} className='usernameandemail' placeholder="Email"/>
            <input type="password" onChange={inputPassword} placeholder="Password"/>
            <div class="terms">
                {/* <input type="checkbox"/>
                <p>I agree to the Google Terms of Service and
                Privacy Policy</p> */}
            </div>
            
            <button class="signupbutton" onClick={signUpButton}>Sign Up</button>
            <a href="/signin" class="alreadyamember">Already a member?</a>

        </div>

    </section>
    <Home />
    </>
  )
}
