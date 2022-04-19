import React from "react";
import MealsSummary from "./MealsSummary";
import AvaiableMeals from "./AvailableMeals";

export default function Meals() {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvaiableMeals />
    </React.Fragment>
  );
}
