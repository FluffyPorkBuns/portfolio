import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import theme from "../theme/theme";

// styled components
const StyledMain = styled.main``;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

// graphql queries
export const portfolioItems = graphql`
  query {
    allContentfulPortfolioItem {
      edges {
        node {
          id
          title
          content
          thumbnail {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  const renderPortfolioItems = data.allContentfulPortfolioItem.edges.map(
    (item) => (
      <li key={item.node.id}>
        <h3>{item.node.title}</h3>
        <p>{item.node.content}</p>
        <GatsbyImage
          image={getImage(item.node.thumbnail)}
          alt={item.node.title}
        />
      </li>
    ),
  );

  return (
    <ThemeProvider theme={theme}>
      <StyledMain>
        <title>Fluffy Pork Bun's Portfolio</title>
        <h1>Fluffy Pork Bun's Front End Developer Portfolio</h1>
        <p>Creating beautiful and accessible websites for everyone</p>
        <h2>Recent Work</h2>
        <StyledList>{renderPortfolioItems}</StyledList>
      </StyledMain>
    </ThemeProvider>
  );
};

export default IndexPage;
