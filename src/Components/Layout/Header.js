import React from "react";
import FoodImage from '../../assets/Food.jpg';
import './Header.css'
import HeaderButton from "./HeaderButton";
const Header = (props) => {
    return (<>
        <header className="header">
            <h1>Meals</h1>
            <HeaderButton onClick={props.onShowCart}/>
        </header>
        <div className="main-image">
            <img src={FoodImage} alt="The food Cart!" />
        </div>
    </>)
}

export default Header;