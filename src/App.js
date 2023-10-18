import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [cartShown, setCartShown] = useState(false)

  const showCartHandler =()=>{
    setCartShown(true)
  }

  const hideCartHandler=()=>{
    setCartShown(false)
  }
  return (
    <>
     { cartShown && <Cart  onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
