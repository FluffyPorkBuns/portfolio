import * as React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectGallery from "../components/projectGallery";

// styled components
const StyledH1 = tw.h1`
  font-bold text-3xl
`;

// graphql queries to get the portfolio gallery
export const portfolioItems = graphql`
  query {
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
`;

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <StyledH1>Fluffy Pork Bun's Front End Developer Portfolio</StyledH1>
      <p>Creating beautiful and accessible websites for everyone</p>
      <h2>Recent Work</h2>
      <ProjectGallery portfolioItems={data.allContentfulPortfolioItem} />
    </Layout>
  );
};

export default IndexPage;
