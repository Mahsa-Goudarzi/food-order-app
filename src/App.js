import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function handleShowCart() {
    setCartIsShown(true);
  }

  function handleHideCart() {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
