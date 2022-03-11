import * as React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";

import {
  faLinkedinIn,
  faGithub,
  faReact,
  faFontAwesomeFlag,
} from "@fortawesome/free-brands-svg-icons";

// component imports
import Layout from "../components/layout";
import ProjectGallery from "../components/projectGallery";
import Container from "../components/container";
import LogoLinkList from "../components/logoLinkList";

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
  // find me at links
  const linkList = [
    { title: "linkedin", icon: faLinkedinIn, size: "lg", faIcon: true },
    { title: "github", icon: faGithub, size: "2x", faIcon: true },
  ];

  // list of technologies for this site
  const techList = [
    {
      id: "gatsby",
      title: "gatsby",
      description: "Gatsby",
      icon: "gatsby",
      url: "https://www.gatsbyjs.com/",
    },
    {
      id: "react",
      title: "react",
      description: "React",
      url: "https://reactjs.org/",
      icon: faReact,
      faIcon: true,
      size: "2x",
    },
    {
      id: "GraphQL",
      title: "GraphQL",
      description: "GraphQL",
      icon: "graphQL",
      url: "https://graphql.org/",
    },
    {
      id: "tailwindcss",
      title: "tailwindcss",
      description: "tailwindcss",
      icon: "tailwind",
      url: "https://tailwindcss.com/",
    },
    {
      id: "styled-components",
      title: "styled-components",
      description: "styled-components",
      icon: "styledComponents",
      url: "https://styled-components.com/",
    },
    {
      id: "contentful",
      title: "contentful",
      description: "Contentful",
      icon: "contentful",
      url: "https://www.contentful.com/",
    },
    {
      id: "fontawesome",
      title: "Font Awesome",
      description: "Font Awesome",
      icon: faFontAwesomeFlag,
      url: "https://fontawesome.com/",
      faIcon: true,
      size: "lg",
    },
  ];

  const missionStatement = data.blurb.edges.find(
    (b) => b.node.title === "mission statement",
  ).node;

  return (
    <Layout links={data.externalLink} techList={techList} linkList={linkList}>
      <DarkSection>
        <DarkContainer>
          <StyledH2>{missionStatement.byline}</StyledH2>
          <StyledP>{missionStatement.content.content}</StyledP>
          <LogoLinkList
            css={[tw`mt-5`]}
            links={data.externalLink}
            linkList={linkList}
            title="Find me here:"
            id="heading-links"
            cmsContent
          />
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
