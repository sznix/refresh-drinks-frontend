import React from 'react'
import Item from '../components/Common/Item'
import background from '../assets/img/header background.png'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../reducks/item/selectors'
import { fetchItems } from '../reducks/item/operations'
import { fetchCarts } from '../reducks/carts/operations';
import { getSubtotal } from '../reducks/carts/selectors'


import Cart from './Cart'

export default function Home() {
  const selector = useSelector(state => state)
  const dispatch = useDispatch()
  const items = getItems(selector)
  const subtotal = getSubtotal(selector);
  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem('LOGIN_USER_KEY')) {
        dispatch(fetchCarts());
        console.log(items);
    }
}, []);
  
  return (
    <div>
        <img src={background} alt="" id="headerbackground"/>
        <h2 class="catagory1">Selected just for you</h2>
            <section id="items">
      {items && items.results && items.results.map(item => (<Item key={item.id} item={item}/>))}
        
    </section>
        <div className='subtotalclass'>
          <h1 className='subtotal'>Subtotal: ${subtotal}</h1> 
          <a href="/cart"><button className='checkyourcart'>Check Your Cart</button></a>
        </div>
    </div>
  )
}
