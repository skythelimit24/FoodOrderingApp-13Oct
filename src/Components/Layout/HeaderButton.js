import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartIcon from "../Cart/CartIcon";
import './HeaderButton.css'
const HeaderButton = (props) => {
    const Cartctx = useContext(CartContext)
    const numberOfCartItems = Cartctx.items.reduce((curNumber, item )=>{
return (curNumber + item.amount)
    },0)
    return (
        <>
            <button className="button" onClick={props.onClick}>
                <span className="icon">
                    <CartIcon />
                </span>
                <span> FoodCart </span>
                <span className="badge">{numberOfCartItems}</span>
            </button>
        </>
    )
}
export default HeaderButton;