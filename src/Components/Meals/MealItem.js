import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import React from "react";
import MealitemForm from "./MealitemForm";
const MealItem =(props)=>{
    const CardCtx  = useContext(CartContext)
    const price = `Rs${props.price.toFixed(2)}`
    const addToCartHandler =(amount)=>{
CardCtx.addItem({
    id:props.id,
    name: props.name,
    amount: amount,
    price:props.price
})
    }
return(
<>
<li>
    <div><h3>{props.name}</h3></div>
    <div>{props.description}</div>
    <div>{price}</div>
</li>
<div><MealitemForm onAddToCart ={addToCartHandler}/></div>
</>
)
}
export default MealItem;
