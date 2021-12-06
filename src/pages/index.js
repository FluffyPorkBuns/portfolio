import * as React from "react";
import tw, { styled } from "twin.macro";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import theme from "../theme/theme";

// globally-applied styles go here
const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.quinary};
  }
`;

// styled components
const StyledMain = tw.main`
  font-sans
`;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledH1 = tw.h1`
  font-bold text-3xl
`;

// graphql queries
export const portfolioItems = graphql`
  query {
    allContentfulPortfolioItem(sort: {fields: createdAt, order: DESC}) {
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
    <ThemeProvider theme={theme.main}>
      <GlobalStyle />
      <StyledMain>
        <title>Fluffy Pork Bun's Portfolio</title>
        <StyledH1>Fluffy Pork Bun's Front End Developer Portfolio</StyledH1>
        <p>Creating beautiful and accessible websites for everyone</p>
        <h2>Recent Work</h2>
        <StyledList>{renderPortfolioItems}</StyledList>
      </StyledMain>
    </ThemeProvider>
  );
};

export default IndexPage;
