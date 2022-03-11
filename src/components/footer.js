import * as React from "react";
import tw from "twin.macro";

import Container from "../components/container";
import LogoLinkList from "../components/logoLinkList";

// styled components
const FooterWrap = tw.footer`
  flex
  justify-center
  items-center
  bg-purple
  md:mt-20
`;
const FooterSection = tw.div`
  flex
  items-center
  flex-wrap
  mb-4
  md:mb-0
  last:mb-0
`;
/**
 * global site footer
 */
export default function Footer({ links, linkList, techList }) {
  return (
    <FooterWrap>
      <Container
        lessPadding
        tw="w-full flex flex-col md:flex-row justify-between mb-0"
      >
        {/* list of icons for where to contact */}
        <FooterSection>
          <LogoLinkList
            id="link-list-title"
            title="Find me here:"
            links={links}
            linkList={linkList}
            cmsContent
          ></LogoLinkList>
        </FooterSection>
        {/* list of icons for technology used to make this site */}
        <FooterSection>
          <LogoLinkList
            id="technology-list-title"
            title="I made this page using:"
            links={links}
            linkList={techList}
          ></LogoLinkList>
        </FooterSection>
      </Container>
    </FooterWrap>
  );
}
