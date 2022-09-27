import React from 'react'
import icon from '../../assets/img/footer icon.svg'

export default function Footer() {
  return (
    <div>
      <footer>
        <img src={icon} alt=""/>
        
        <h2 class="slogan">Premium Quality soft drinks, hot drinks, soda & energy drinks at the best and most affordable price.<br/>
            we have a new offer every day for 365 days</h2>

        <h2 class="contact">Contact</h2>
        
        <h2 class="info">E-maildrink@refresh.com | Hotline: +1 131 138 138</h2>

        <hr/>

        <h2 class="rights">DESIGN BY REFRESH - © 2022. ALL RIGHTS RESERVED.</h2>
    </footer>
    </div>
  )
}
