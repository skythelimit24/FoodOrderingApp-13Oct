import React from "react";
import '../UI/Input.css'
import './Input.css'
const Input =(props)=>{
   return (
    <>
    <div className="input">
        <label className="input label" htmlFor={props.input.id}>{props.label}</label>
        <input className="input input"  {...props.input}/>
    </div>
    </>
   ) 
}

export default Input ;