
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from '../API';
import { getCarts, getSubtotal } from '../reducks/carts/selectors';
import { fetchCarts } from '../reducks/carts/operations';
import { addOrder } from '../reducks/order/operations';
import { push } from 'connected-react-router';
const api = new API();

export default function Order() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const subtotal = getSubtotal(selector);
    const carts = getCarts(selector);

    const [full_name, setFullName] = useState(''),
        [phone, setPhone] = useState(''),
        [address, setAddress] = useState(''),
        [pincode, setPincode] = useState(''),
        [apt, setApt] = useState(''),
        [city, setCity] = useState(''),
        [state, setState] = useState(''),
        [totalitem, setTotalItem] = useState(0);

    useEffect(() => {
        dispatch(fetchCarts());
    }, []);

    useEffect(() => {
        let arr = [];
        if (carts != undefined && carts.length > 0) {
            for (let key in carts) {
                arr.push(carts[key].quantity);
            }
            let sum = arr.reduce(function (a, b) {
                return a + b;
            }, 0);
            setTotalItem(sum);
        }
    }, [carts]);

    const inputFullname = e => {
        setFullName(e.target.value);
    };

    const inputPhoneNumber = e => {
        setPhone(e.target.value);
    };

    const inputAddress = e => {
        setAddress(e.target.value);
    };

    const inputPin = e => {
        setPincode(e.target.value);
    };

    const inputHouse = e => {
        setApt(e.target.value);
    };

    const inputCity = e => {
        setCity(e.target.value);
    };

    const inputState = e => {
        setState(e.target.value);
    };

    const orderButton = e => {
        let params = {
            total_price: subtotal,
            full_name: full_name,
            address_line1: address,
            address_line2: apt,
            city: city,
            state: state,
            postal_code: pincode,
            country: 'US',
            telephone: phone
        };
        dispatch(addOrder(params));
        e.preventDefault();
        dispatch(push('/thankyou'));
    };

  return (
      <>
      <section id="Order">
        
        
        <div class="top">
            <h2 class="shipment-details">Shipment Details</h2>
            <h3 class="checkthem">Please check your details and confirm it</h3>
        </div>

        <div class="shipment">
        
            <table class="items">
            {carts &&
                                carts.map(cart => (
                                                <tr>
                                                <td class="name">{cart.item.name}</td>
                                                <td class="amount">{cart.quantity}</td>
                                                <td>
                                                    <div class="price-div">
                                                        <h3 class="price">${cart.item.price}</h3>
                                                    </div>
                                                </td>
                                                </tr>
                                ))}

            </table>
            
            <hr class="cart-line"/>

            <table class="items-total">
                <tr>
                    <td class="name">Total</td>
                    <td class="amount">{totalitem}</td>
                    <td>
                        <div class="price-div">
                            <h3 class="price">${subtotal}</h3>
                        </div>
                    </td>
                </tr>
                
            </table>

        </div>
    </section>

    <section class="form">
        <div class="input">
            <h2>Full Name</h2>
            <input type="text" onChange={inputFullname} placeholder="Enter recipient's full name"/>
        </div>
        <div class="input">
            <h2>Phone Number</h2>
            <input type="text"onChange={inputPhoneNumber} placeholder="Enter phone number"/>
        </div>
        <div class="input">
            <h2>Street Address or P.O. Box</h2>
            <input type="text" onChange={inputAddress} placeholder="Enter street address or P.O. box"/>
        </div>
        <div class="input">
            <h2>Pin Code</h2>
            <input type="text" onChange={inputPin} placeholder="Enter pin code"/>
        </div>
        <div class="input">
            <h2>Apt, Suite, Unit, Building, Floor, etc.</h2>
            <input type="text" onChange={inputHouse} placeholder="Apt, Suite, Unit, Building, Floor, etc."/>
        </div>
        <div class="input">
            <h2>City</h2>
            <input type="text" onChange={inputCity} placeholder="Enter City"/>
        </div>
        <div class="input">
            <h2>State</h2>
            <input type="text" onChange={inputState} placeholder="Enter State"/>
        </div>

        <button class="submit" onClick={orderButton}>SUBMIT</button>

    </section>

      </>
  )
}
