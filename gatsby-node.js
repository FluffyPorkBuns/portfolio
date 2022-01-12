const path = require("path");
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allContentfulPortfolioItem(sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              title
              content
              thumbnail {
                gatsbyImageData
              }
              portfolioItemSlug
            }
          }
        }
      }
    `,
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // Create pages for each markdown file.
  const projectPageTemplate = path.resolve(`./templates/project-pages.js`);
  result.data.allContentfulPortfolioItem.edges.forEach(({ node }) => {
    const path = node.portfolioItemSlug;
    createPage({
      path,
      component: projectPageTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        project: node,
      },
    });
  });
};
