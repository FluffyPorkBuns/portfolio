import * as React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";

// component imports
import Layout from "../components/layout";
import ProjectGallery from "../components/projectGallery";
import Container from "../components/container";

// styled components
const StyledH2 = tw.h2`
  text-offWhite
  font-sans
  text-2xl
  font-bold
  mb-6
`;
const StyledH2Dark = tw(StyledH2)`
  text-dark
`;
const DarkSection = tw.div`
  bg-purple
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
// TODO: add blurb to first section
// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <DarkSection>
        <Container>
          <StyledH2>The Web is for Everyone</StyledH2>
        </Container>
      </DarkSection>
      <Container>
        <StyledH2Dark>Recent Work</StyledH2Dark>
        <ProjectGallery portfolioItems={data.allContentfulPortfolioItem} />
      </Container>
    </Layout>
  );
};

export default IndexPage;
