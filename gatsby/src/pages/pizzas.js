import { graphql } from 'gatsby';
import React from 'react';

export default function PizzasPage({ data }) {
  return (
    <>
      <p>This is {data.pizzas.nodes.length}Pizza page</p>
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
      }
    }
  }
`;
