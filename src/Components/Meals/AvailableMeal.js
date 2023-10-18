import React from "react";
import "./AvailableMeal.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer",
    description: "Finest Paneer and veggies",
    price: 2290,
  },
  {
    id: "m2",
    name: "Naan",
    description: "A Punjabi specialty!",
    price: 165,
  },
  {
    id: "m3",
    name: "Khoya",
    description: "Indian, Cooked, Creamy",
    price: 1299,
  },
  {
    id: "m4",
    name: "MixVeg",
    description: "Healthy...and green...",
    price: 1899,
  },
];
const AvailableMeal = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className="meals">
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeal;
