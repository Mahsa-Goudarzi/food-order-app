import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const meal = props.meal;
  const id = meal.id;
  const name = meal.name;
  const price = meal.price;
  const description = meal.description;

  const cartCtx = useContext(CartContext);

  function handleAddToCart(amount) {
    cartCtx.addItem({ id: id, name: name, amount: amount, price: price });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
}
