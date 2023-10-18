import React from "react";
import Modal from "../UI/Modal";
import './Cart.css'
const Cart = (props) => {
    const cartItems = <ul className="cart-items">{[{ id: 'c1', name: 'Burger', amount: 2, price: 45 }].map(item => <li>{item.name}</li>)}</ul>
    return (
        <>
            <Modal onClose={props.onCloseCart}>
                {cartItems}
                <div className="total">
                    <span>TotalAmount</span>
                    <span>35</span>
                </div>
                <div className="actions">
                    <button className="button--alt" onClick={props.onCloseCart}>Close</button>
                    <button className="button">Order</button>
                </div>
            </Modal>
        </>
    )
}

export default Cart;