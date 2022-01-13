import * as React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectGallery from "../components/projectGallery";

// styled components
const StyledH2 = tw.h2`
  text-2xl font-bold mb-4
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
      <StyledH2>Recent Work</StyledH2>
      <ProjectGallery portfolioItems={data.allContentfulPortfolioItem} />
    </Layout>
  );
};

export default IndexPage;
