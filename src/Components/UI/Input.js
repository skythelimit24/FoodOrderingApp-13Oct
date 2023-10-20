import React from "react";
import '../UI/Input.css'
import './Input.css'
const Input =React.forwardRef((props,ref )=>{
   return (
    <>
    <div className="input">
        <label className="input label" htmlFor={props.input.id}>{props.label}</label>
        <input  ref={ref}  {...props.input}/>
    </div>
    </>
   ) 
})

export default Input ;