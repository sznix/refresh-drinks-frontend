import React from 'react'
import CartItem from '../components/Common/Cart-item'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarts } from '../reducks/carts/operations'
import { getCarts, getSubtotal } from '../reducks/carts/selectors'
import { fetchItems } from '../reducks/item/operations'
import { getItems } from '../reducks/item/selectors'


export default function Cart() {
  const selector = useSelector(state => state)
  const dispatch = useDispatch()
  const carts = getCarts(selector)
  const subtotal = getSubtotal(selector)
  const items = getItems(selector)
  useEffect(() => {
    dispatch(fetchCarts())
    dispatch(fetchItems())
  },[])

  return (
    <div>
      <section id="cart">
        <div class="title">
          <h2 class="shopping cart">Shopping Cart</h2>
        </div>
        <table>
          <tr>
            <th>Product</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </table>
        {(carts && carts.map(cart => <CartItem cart={cart} />))}
        {/* <CartItem /> */}
        <div class="total">
          <h4 class="total-cost">Total Cost</h4>
          <h4 class="total-price">${subtotal}</h4>
          <a href="/">
          <button id="continue-shopping">CONTINUE SHOPPING</button></a>
          <a href="/order">
          <button id="next-step">NEXT STEP</button>
          </a>
          
        </div>
      </section>
    </div>
  )
}
