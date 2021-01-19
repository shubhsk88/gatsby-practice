import dotenv from 'dotenv';

dotenv.config();

// This file is empty, but some people were reporting that it would not start unless they had an empty file.So here it is! You can delete the comment.Or replace it with your favourite shania twain lyrics.
export default {
  siteMetadata: {
    title: 'Slick slice',
    sitUrl: 'http://gatsby.slice',
    description: 'The best pizza out in the lucknow ',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'msiaxno3',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
