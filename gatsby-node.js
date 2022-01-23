const path = require("path");
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        portfolio: allContentfulPortfolioItem(
          sort: { fields: createdAt, order: DESC }
        ) {
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
        externalLink: allContentfulExternalLink {
          edges {
            node {
              title
              url
              description
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
  // Create pages for each portfolio item
  const projectPageTemplate = path.resolve(`./templates/project-pages.js`);
  result.data.portfolio.edges.forEach(({ node }) => {
    const path = node.portfolioItemSlug;
    createPage({
      path,
      component: projectPageTemplate,
      // pass portfolio data and footer links to project page template
      context: {
        project: node,
        links: result.data.externalLink,
      },
    });
  });
};
