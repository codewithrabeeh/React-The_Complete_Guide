import Header from './Components/Layout/Header';
import React, {Fragment, useState} from 'react';
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import CartProvider from './Store/CartProvider';

/* 4:36 */
function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown) 
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart  showCartFunc={showCartHandler}/>}
      <Header showCartFunc={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
