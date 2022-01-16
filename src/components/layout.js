import * as React from "react";
import tw, { GlobalStyles, styled, theme } from "twin.macro";
import { Global, css } from "@emotion/react";
import { Helmet } from "react-helmet";

// styled components
const StyledMain = styled.main`
  background: ${theme`colors.offWhite`};
  color: ${theme`colors.gray`};
  ${tw`font-sans`};
`;
const SiteHeader = styled.header`
  ${tw`pt-28`};
  ${tw`pb-12`};
`;
const StyledH1 = styled.h1`
  color: ${theme`colors.dark`};
  ${tw`font-semibold`};
  ${tw`text-5xl`};
  ${tw`text-center`};
  ${tw`mb-6`};
`;
const HeaderBlurb = styled.p`
  color: ${theme`colors.gray`};
  ${tw`text-2xl`};
  ${tw`text-center`};
`;
const myGlobalStyles = `
  html {
    background: ${theme`colors.offWhite`};
  }
`;
export default function Layout({ title, children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${process.env.GATSBY_PORTFOLIO_PERSON}'s Portfolio${
          title ? " - " + title : ""
        }`}</title>
      </Helmet>
      <GlobalStyles />
      <Global
        styles={css`
          ${myGlobalStyles}
        `}
      />
      <SiteHeader>
        <StyledH1>
          {process.env.GATSBY_PORTFOLIO_PERSON}, Frontend Engineer
        </StyledH1>
        <HeaderBlurb>
          Creating beautiful and accessible websites for everyone!
        </HeaderBlurb>
      </SiteHeader>
      <StyledMain>{children}</StyledMain>
    </div>
  );
}
