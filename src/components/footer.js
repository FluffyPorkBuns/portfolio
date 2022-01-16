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
export default function Footer() {
  return (
    <FooterWrap>
      <Container lessPadding>
        <LogoLinkList>
          <LogoLinkListItem>
            <LogoLink href={process.env.GATSBY_URL_LINKEDIN} className="group">
              <LinkIcon
                icon={faLinkedinIn}
                className="group-hover:text-purple"
              />
              <LinkCaption>LinkedIn</LinkCaption>
            </LogoLink>
          </LogoLinkListItem>
          <LogoLinkListItem>
            <LogoLink href={process.env.GATSBY_URL_GITHUB} className="group">
              <LinkIcon
                icon={faGithub}
                className="group-hover:text-purple"
                size="2x"
              />
              <LinkCaption>GibHub</LinkCaption>
            </LogoLink>
          </LogoLinkListItem>
        </LogoLinkList>
      </Container>
    </FooterWrap>
  );
}
