import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';
import Fanta from '../../assets/img/fanta image.png'
import { ADD_CART } from '../../reducks/carts/actions'
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations'
import { push } from 'connected-react-router'

export default function Item({item}) {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const [particularCart, setParticularCart] = useState(null);
    const key = localStorage.getItem('LOGIN_USER_KEY');


    const clickAddCart = () => {
        if (key) {
            dispatch(addCart(item));
        } else {
            dispatch(push('/signin'));
        }
    };
    useEffect(() => {
        if (carts != undefined && carts.length > 0) {
            let matchedCarts = carts.filter(cart => cart.item.id == item.id);
            console.log('matchedCarts');
            console.log(matchedCarts);
            if (matchedCarts.length > 0) {
                setParticularCart(matchedCarts[0]);
            } else {
                setParticularCart(null);
            }
        }
    console.log(subtotal);

    }, [subtotal]);
    const clickPlusCart = () => {
        dispatch(increaseCart(particularCart.id));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(particularCart.id));
    };


    return (
        <>

            <div class="itemcard">
                <div class="itemimage">
                    <img src={'https://res.cloudinary.com/dtmdq0fjg/'+item.image} alt="" id="image" />
                </div>
                <div class="itemdetails">
                    <div class="iteminfo">
                        <h2 class="name">{item.name}</h2>
                        <h2 class="price">{'$'+item.price}</h2>
                    </div>
                    {subtotal!=0 && particularCart && particularCart.quantity > 0 ? (
                    <div class="added-cart">
                        <span id="minus" onClick={clickMinusCart}>
                            －
                        </span>
                        <span id="count">{particularCart.quantity}</span>
                        <span id="plus" onClick={clickPlusCart}>
                            +
                        </span>
                    </div>
                ) : (
                    <button onClick={clickAddCart}>
                        ADD TO CART
                    </button>
                )}
                </div>
            </div>

        </>
    )
}
