import React from 'react'
import logo from '../../assets/img/refresh icon.svg'
import search from '../../assets/img/search icon.svg'
import cart from '../../assets/img/cart icon.svg'
import user from '../../assets/img/user icon.svg'
import background from '../../assets/img/header background.png'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header>
        <div class="headerbar">
            <img src={logo} alt="" id="topicon"/>
            
            
            <div class="icons">
                <Link to='/cart'>
                <img src={cart} alt="" id="carticon"/>
                </Link>
                <img src={user} alt="" id="usericon"/>
            </div>
           
        </div>
       
        
    </header>
    </div>
  )
}
