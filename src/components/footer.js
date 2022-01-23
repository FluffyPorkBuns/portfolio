import * as React from "react";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import Container from "../components/container";

// styled components
const FooterWrap = tw.footer`
  flex justify-center items-center bg-purple
`;
const LogoLinkList = tw.ul`
  flex
  list-none
`;
const LogoLinkListItem = tw.li`
  mr-2
`;
const LogoLink = tw.a`
  rounded-full
  w-10
  h-10
  flex
  items-center
  justify-center
  border-offWhite
  border-2
  hover:bg-offWhite
  transition-all
`;
const LinkCaption = tw.span`
  sr-only
`;
const LinkIcon = tw(FontAwesomeIcon)`
  text-offWhite
  group-hover:text-purple
  transition-all
`;
export default function Footer({ links }) {
  // list of links to be rendered in the footer
  const linkList = [
    { title: "linkedin", icon: faLinkedinIn },
    { title: "github", icon: faGithub },
  ];

  // renders all the links in linkList
  const renderLinkItem = function (linkData, links) {
    // get database entry for this link item
    const linkItem = links.edges.find(
      (l) => l.node.title === linkData.title,
    ).node;

    return (
      <LogoLinkListItem>
        <LogoLink href={linkItem.url} className="group">
          <LinkIcon icon={linkData.icon} className="group-hover:text-purple" />
          <LinkCaption>{linkItem.description}</LinkCaption>
        </LogoLink>
      </LogoLinkListItem>
    );
  };

  return (
    <FooterWrap>
      <Container lessPadding>
        <h2></h2>
        <LogoLinkList>
          {linkList.map((l) => renderLinkItem(l, links))}
        </LogoLinkList>
      </Container>
    </FooterWrap>
  );
}
