import React, { useEffect, useState } from 'react'
import Pepsi from '../../assets/img/Pepsi.png'
import Exit from '../../assets/img/exit button.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations'

export default function CartItem ({cart}) {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    
    
    const clickPlusCart = () => {
        dispatch(increaseCart(cart.id));
    };

    const clickMinusCart = () => {
        dispatch(decreaseCart(cart.id));
    }; 

    // useEffect(() => {
    //     console.log(cart.image);
    //     console.log(cart);
    // });

  return (
    <div>
      
    <table>
            {/* <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Price</th>
            </tr> */}
            <tr>
                <td class="item">
                    <div class="image">
                    <img src={'https://res.cloudinary.com/techis/'+cart.item.image} alt=""/>
                    </div>
                    <span>{cart.item.name}</span>
                </td>
                {/* <td>
                    {cart.quantity}
                </td> */}
                <td>
                    <div class="item-amount">
                        <h4 onClick={clickMinusCart} class="-">-</h4>
                        <h4 class="#amount">{cart.quantity}</h4>
                        <h4 onClick={clickPlusCart} class="+">+</h4>
                    </div>
                </td>
                <td>
                    <p>${cart.item.price}</p>
                </td>
                {/* <td>
                    <img src={Exit} alt=""/>
                </td> */}
            </tr>
        </table>
    </div>
  )
}
