import * as React from "react";
import tw, { styled, theme } from "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectGallery from "../components/projectGallery";

import Container from "../components/container";

// styled components
const StyledH2 = styled.h2`
  color: ${theme`colors.offWhite`};
  ${tw`text-2xl`}
  ${tw`font-bold`}
  ${tw`mb-6`}
`;
const DarkSection = styled.div`
  background: ${theme`colors.purple`};
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
      <DarkSection>
        <Container>
          <StyledH2>Recent Work</StyledH2>
          <ProjectGallery portfolioItems={data.allContentfulPortfolioItem} />
        </Container>
      </DarkSection>
    </Layout>
  );
};

export default IndexPage;
