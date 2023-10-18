import React from "react";
import MealitemForm from "./MealitemForm";
const MealItem =(props)=>{
    const price = `Rs${props.price.toFixed(2)}`
return(
<>
<li>
    <div><h3>{props.name}</h3></div>
    <div>{props.description}</div>
    <div>{price}</div>
</li>
<div><MealitemForm/></div>
</>
)
}
export default MealItem;
