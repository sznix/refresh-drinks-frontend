import React from 'react'
import Exit from '../assets/img/exit button.svg'
import Home from './Home'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { signIn } from '../reducks/users/operations'
import { useState } from 'react'

export default function Signin() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputEmail = (event) => {
    setEmail(event.target.value)
  }

  const inputPassword = (event) => {
    setPassword(event.target.value)
  }

  const signInButton = () => {
    dispatch(signIn(email,password))
    setEmail('')
    setPassword('')
  }

  return (
    <>
     <section id="signin">
        <div class="signin-card">
            <img onClick={() => (dispatch(push('/')))} src={Exit} alt="" class="exitbutton" />
            <h1 class="signincardtitle">Login</h1>
            <p class="signincarddescription">Log in to place an order</p>
            <input onChange={inputEmail} type="text" className='usernameandemail' placeholder="Email" />
            <input onChange={inputPassword} type="password" placeholder="Password" />
            <div class="terms">
                {/* <input type="checkbox" />
                <p>Keep Me Signed In</p> */}
                {/* <a href="" class="forgotpassword">Forgot Password?</a> */}
            </div>
            
            <button onClick={signInButton} class="signinbutton">Sign In</button>

            <div onClick={() => (dispatch(push('/signup')))} >Not a member yet?          Sign Up</div>
        </div>

    </section>

    <Home />
    </>
  )
}
