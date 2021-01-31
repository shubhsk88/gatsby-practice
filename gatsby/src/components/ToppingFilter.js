import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const countToppingsInPizza = (pizzas) => {
  console.log(pizzas);
  const toppingsCount = pizzas
    .flatMap((pizza) => pizza.toppings)
    .reduce((acc, topping) => {
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        existingTopping.count += 1;
      } else {
        acc[topping.id] = {
          count: 1,
          name: topping.name,
        };
      }
      return acc;
    }, {});

  const sortedToppings = Object.values(toppingsCount).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
};
const ToppingFilter = () => {
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  console.log(pizzas);

  const toppingsCount = countToppingsInPizza(pizzas.nodes);
  console.clear();
  console.log(toppingsCount);

  return <div>Hello world</div>;
};
export default ToppingFilter;
