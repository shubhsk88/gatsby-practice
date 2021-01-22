import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledPizzaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
`;
const StyledPizza = styled.div`
  @supports not (grid-template-row: subgrid) {
    --rows: auto auto 1fr;
  }
  display: grid;
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;
function SinglePizza({ pizza }) {
  console.log(pizza);
  return (
    <StyledPizza>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </StyledPizza>
  );
}

const PizzasList = ({ pizzas }) => (
  <StyledPizzaGrid>
    {pizzas.map((pizza) => (
      <SinglePizza key={pizza.id} pizza={pizza} />
    ))}
  </StyledPizzaGrid>
);

export default PizzasList;
