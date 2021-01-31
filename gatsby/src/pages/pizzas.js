import { graphql } from 'gatsby';
import React from 'react';
import PizzasList from '../components/PizzasList';
import ToppingFilter from '../components/ToppingFilter';

export default function PizzasPage({ data }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <ToppingFilter />
      <PizzasList pizzas={pizzas} />
    </>
  );
}

export const pageQuery = graphql`
  query pizzasQuery {
    pizzas: allSanityPizza {
      nodes {
        id
        price
        name
        slug {
          current
        }
        toppings {
          name
          vegetarian
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
