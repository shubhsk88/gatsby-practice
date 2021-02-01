import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  align-items: center;
  a {
    border-radius: 5px;
    background: var(--grey);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    padding: 5px;
    .count {
      background-color: white;
      padding: 2px 5px;
    }
    .active {
      background: var(--yellow);
    }
  }
`;
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
          id: topping.id,

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

  const toppingsCount = countToppingsInPizza(pizzas.nodes);
  console.clear();
  console.log(toppingsCount);

  return (
    <ToppingStyle>
      {toppingsCount.map((topping) => (
        <Link to={`/toppings/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingStyle>
  );
};
export default ToppingFilter;
