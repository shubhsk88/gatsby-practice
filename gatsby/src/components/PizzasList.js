import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

function SinglePizza({ pizza }) {
  console.log(pizza);
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </div>
  );
}

const PizzasList = ({ pizzas }) => (
  <div>
    {pizzas.map((pizza) => (
      <SinglePizza key={pizza.id} pizza={pizza} />
    ))}
  </div>
);

export default PizzasList;
