import * as React from "react";
import tw, { styled } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faReact,
  faFontAwesomeFlag,
} from "@fortawesome/free-brands-svg-icons";
import { theme } from "../../tailwind.config";

import IconGatsby from "../images/Gatsby-Monogram.svg";
import IconContentful from "../images/contentful.svg";
import IconGraphQL from "../images/GraphQL.svg";
import IconTailwind from "../images/tailwindcss.svg";
import IconStyledComponents from "../images/styled-components.svg";

import Container from "../components/container";

// styled components
const FooterWrap = tw.footer`
  flex
  justify-center
  items-center
  bg-purple
  md:mt-20
`;
const LogoLinkList = tw.ul`
  flex
  list-none
`;
const LogoLinkListItem = tw.li`
  mr-2
  last:mr-0
`;
const LogoLink = styled.a`
  ${tw`rounded-full`}
  ${tw`p-1`}
  ${tw`w-10`}
  ${tw`h-10`}
  ${tw`flex`}
  ${tw`items-center`}
  ${tw`justify-center`}
  ${tw`border-offWhite`}
  ${tw`border-2`}
  ${tw`hover:bg-offWhite`}
  ${tw`focus:bg-offWhite`}
  ${tw`transition-all`}
    & * {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  &:hover,
  &:focus {
    * {
      color: ${theme.colors.purple};
      fill: ${theme.colors.purple};
      stroke: ${theme.colors.purple};
    }
  }
`;
const LinkCaption = tw.span`
  sr-only
`;
const LinkIcon = tw(FontAwesomeIcon)`
  text-offWhite
  group-hover:text-purple
  transition-all
`;
const FooterTitle = tw.h2`
  font-semibold
  text-offWhite
  w-full
  mb-2
  md:mr-2
  md:w-auto
  md:mb-0
`;
const FooterSection = tw.div`
  flex
  items-center
  flex-wrap
  mb-4
  md:mb-0
  last:mb-0
`;
export default function Footer({ links }) {
  // list of links to be rendered in the footer
  const linkList = [
    { title: "linkedin", icon: faLinkedinIn, size: "lg" },
    { title: "github", icon: faGithub, size: "2x" },
  ];

  const techList = [
    {
      id: "gatsby",
      title: "gatsby",
      description: "Gatsby",
      icon: IconGatsby,
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
      icon: IconGraphQL,
      url: "https://graphql.org/",
    },
    {
      id: "tailwindcss",
      title: "tailwindcss",
      description: "tailwindcss",
      icon: IconTailwind,
      url: "https://tailwindcss.com/",
    },
    {
      id: "styled-components",
      title: "styled-components",
      description: "styled-components",
      icon: IconStyledComponents,
      url: "https://styled-components.com/",
    },
    {
      id: "contentful",
      title: "contentful",
      description: "Contentful",
      icon: IconContentful,
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

  // renders all the links in linkList
  const renderLinkItem = function ({ linkData, links, cmsContent }) {
    // get database entry for this link item if cmsContent is true
    const linkItem = cmsContent
      ? links.edges.find((l) => l.node.title === linkData.title).node
      : linkData;

    return (
      <LogoLinkListItem key={linkItem.id}>
        <LogoLink
          href={linkItem.url}
          className="group"
          title={linkItem.description}
        >
          {cmsContent || linkItem.faIcon ? (
            <LinkIcon
              icon={linkData.icon}
              className="group-hover:text-purple"
              size={linkData.size}
            />
          ) : (
            <linkData.icon />
          )}
          <LinkCaption>{linkItem.description}</LinkCaption>
        </LogoLink>
      </LogoLinkListItem>
    );
  };

  return (
    <FooterWrap>
      <Container
        lessPadding
        tw="w-full flex flex-col md:flex-row justify-between mb-0"
      >
        <FooterSection>
          <FooterTitle id="link-list-title">Find me here:</FooterTitle>
          <LogoLinkList aria-labelledby="link-list-title">
            {linkList.map((l) =>
              renderLinkItem({ linkData: l, links: links, cmsContent: true }),
            )}
          </LogoLinkList>
        </FooterSection>
        <FooterSection>
          <FooterTitle id="technology-list-title">
            I made this page using:
          </FooterTitle>
          <LogoLinkList aria-labelledby="technology-list-title">
            {techList.map((l) => renderLinkItem({ linkData: l, links: links }))}
          </LogoLinkList>
        </FooterSection>
      </Container>
    </FooterWrap>
  );
}
