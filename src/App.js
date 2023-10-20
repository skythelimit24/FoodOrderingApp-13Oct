import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
const App = () => {
  const [cartShown, setCartShown] = useState(false)

  const showCartHandler =()=>{
    setCartShown(true)
  }

  const hideCartHandler=()=>{
    setCartShown(false)
  }
  return (
    <CartProvider>
     { cartShown && <Cart  onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
