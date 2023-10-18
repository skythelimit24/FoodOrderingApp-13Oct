import CartIcon from "../Cart/CartIcon";
import './HeaderButton.css'
const HeaderButton = (props) => {
    return (
        <>
            <button className="button" onClick={props.onClick}>
                <span className="icon">
                    <CartIcon />
                </span>
                <span> FoodCart </span>
                <span className="badge"> 3</span>
            </button>
        </>
    )
}
export default HeaderButton;