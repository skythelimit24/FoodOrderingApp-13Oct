import React from "react";
import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import "./Cart.css";
import CartItem from "./CartItem";
const Cart = (props) => {
    const CartCtx = useContext(CartContext);
    const totalAmount = `Rs.${CartCtx.totalAmount.toFixed(2)}`;
    const hasItems = CartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => { };
    const cartItemAddHandler = (item) => { };
    const cartItems = (
        <ul className="cart-items">
            {CartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );
    return (
        <>
            <Modal onClose={props.onCloseCart}>
                {cartItems}
                <div className="total">
                    <span>TotalAmount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className="actions">
                    <button className="button--alt" onClick={props.onCloseCart}>
                        Close
                    </button>
                    {hasItems && <button className="button">Order</button>}
                </div>
            </Modal>
        </>
    );
};

export default Cart;
