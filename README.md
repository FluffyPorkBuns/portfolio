# My portfolio
A simple portfolio page using [Gatsby](https://www.gatsbyjs.com/) and [Contentful](https://www.contentful.com/) CMS.
## Install and build process
* Run `yarn` to download and install the required modules
* Run `yarn start` to start a local development server to see the site
* Run `yarn build` to build the production files for deployment

Please note that for local development you must set up a `.env.development` file in the root directory with the following environment variables for the project to run correctly:
* CONTENTFUL_DELIVERY_API - The delivery API key from Contentful
* CONTENTFUL_SPACE_ID - The Space ID for the site content you want to pull from Contentful
* GATSBY_PORTFOLIO_PERSON - The name of the person to put at the top of the page

For production you will need to set up those environment variables on your server.

## Design notes
Here are a few of the technologies used to build this page and what they're doing:
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) for some logos
* [twin.macro](https://github.com/ben-rogerson/twin.macro) to allow [Emotion](https://emotion.sh/docs/introduction), [tailwindcss](https://tailwindcss.com/), and [styled-components](https://styled-components.com/) to play nicely together to style the page
* [GraphQL](https://graphql.org/) to pull data from [Contentful](https://www.contentful.com/) to display on the page
* [react-helmet](https://www.npmjs.com/package/react-helmet) to add the html lang property, meta, and title tags to the html
* [Fontsource](https://fontsource.org/) to self-host the Open Sans Google font used by the page

The font and color scheme for the page can be edited in `tailwind.config.js` in the root directory.

## Helpful resources
Here are some resources I found helpful when building this project:
* [How To Build A Portfolio With Gatsby — From Scratch To Deployment](https://konstantinmuenster.medium.com/how-to-build-a-portfolio-with-gatsby-from-scratch-to-deployment-cacbf7a1527) - Helpful for intial setup of the project.
* [Twin.macro Tutorial for Beginners: Styling with Tailwind CSS and Emotion in React](https://blog.formpl.us/twin-macro-tutorial-for-beginners-styling-with-tailwind-css-and-emotion-in-react-5228c819d713) - For getting all the styling modules to play nicely together.
* [How-to Guides](https://www.gatsbyjs.com/docs/how-to) - Gatsby has great documentation and guides to follow!
* [gatsby-plugin-slug-field](https://www.gatsbyjs.com/plugins/gatsby-plugin-slug-field/) - For creating slugs for Node.js generated pages before I decided to make this a one page portfolio.

## Thank you
* To my spouse and friends who gave me helpful feedback to improve the look, feel, and presentation of the project
* And to you for reading this! Hope you have a great day.
