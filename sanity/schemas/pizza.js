import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the Pizzas',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Pizza Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Price of the pizza',
      validation: (Rule) => Rule.min(1000).max(5000),
    },
    {
      name: 'toppings',
      type: 'array',
      title: 'Toppings',
      validation: (Rule) => Rule.unique(),
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
      vegetarian0: 'toppings.0.vegetarian',
      vegetarian1: 'toppings.1.vegetarian',
      vegetarian2: 'toppings.2.vegetarian',
      vegetarian3: 'toppings.3.vegetarian',
    },
    prepare: ({
      title,
      media,
      vegetarian0,
      vegetarian1,
      vegetarian2,
      vegetarian3,
      ...toppings
    }) => {
      const vegetarian = [
        vegetarian0,
        vegetarian1,
        vegetarian2,
        vegetarian3,
      ].filter((veg) => veg !== undefined);

      const top = Object.values(toppings).filter(Boolean);

      return {
        title: `${title} ${vegetarian.every((x) => x === true) ? '🌱' : ' '}`,
        media,
        subtitle: top.join(', '),
      };
    },
  },
};
