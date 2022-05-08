import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

export default function AvaiableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const loadedMeals = [];
      const response = await fetch(
        "https://mahsa-react-movie-app-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json(); //data coming back from firebase is an Object. we want an array

      for (const key in responseData) {
        loadedMeals.push({ id: key, ...responseData[key] });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return <MealItem meal={meal} key={meal.id} />;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
