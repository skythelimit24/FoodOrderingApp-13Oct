import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

let updatedItems 
if (existingCartItem){
  const updatedItem ={
        ...existingCartItem,
        amount:existingCartItem.amount + action.item.amount
    };
    updatedItems =[...state.items];
    updatedItems[existingCartItemIndex] = updatedItem
}
else{
    updatedItems = state.items.concat(action.item);
}
    
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartActions] = useReducer(cartReducer, defaultCartState)

    const addItemsToCartHandler = (item) => {
        dispatchCartActions({ type: 'ADD', item: item });
    }

    const removeItemsFromCartHandler = (id) => {
        dispatchCartActions({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemsToCartHandler,
        removeItem: removeItemsFromCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider