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
  ],
};
