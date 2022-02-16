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
  text-xl
  md:text-2xl
  font-bold
  mb-6
`;
const StyledP = tw.p`
  text-lg
  font-normal
  text-offWhite
  font-sans
`;
const StyledH2Dark = tw(StyledH2)`
  text-dark
`;
const DarkSection = tw.div`
  bg-purple
`;
const DarkContainer = tw(Container)`
  md:pb-16
  mb-10
`;

// graphql queries to get the portfolio gallery
export const portfolioItems = graphql`
  query {
    portfolio: allContentfulPortfolioItem(sort: { fields: order, order: ASC }) {
      edges {
        node {
          id
          title
          content
          portfolioItemSlug
          technologies
          thumbnail {
            gatsbyImageData
          }
          portfolioItemSlug
          order
        }
      }
    }
    blurb: allContentfulBlurb {
      edges {
        node {
          byline
          title
          content {
            content
          }
        }
      }
    }
    externalLink: allContentfulExternalLink {
      edges {
        node {
          id
          title
          url
          description
        }
      }
    }
  }
`;
// markup
const IndexPage = ({ data }) => {
  const missionStatement = data.blurb.edges.find(
    (b) => b.node.title === "mission statement",
  ).node;

  return (
    <Layout links={data.externalLink}>
      <DarkSection>
        <DarkContainer>
          <StyledH2>{missionStatement.byline}</StyledH2>
          <StyledP>{missionStatement.content.content}</StyledP>
        </DarkContainer>
      </DarkSection>
      <Container>
        <StyledH2Dark>Check out what I'm working on:</StyledH2Dark>
        <ProjectGallery portfolioItems={data.portfolio} />
      </Container>
    </Layout>
  );
};

export default IndexPage;
