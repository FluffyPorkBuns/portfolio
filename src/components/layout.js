import * as React from "react";
import tw, { GlobalStyles, styled, theme } from "twin.macro";
import { Global, css } from "@emotion/react";
import { Helmet } from "react-helmet";

// styled components
const StyledMain = styled.main`
  background: ${theme`colors.dark`};
  color: ${theme`colors.gray`};
  ${tw`font-sans`};
`;
const StyledContainer = tw.div`
  max-w-4xl mx-auto p-6
`;
const SiteHeader = styled.header`
  ${tw`pt-16`};
  ${tw`pb-8`};
`;
const StyledH1 = styled.h1`
  color: ${theme`colors.teal`};
  ${tw`font-semibold`};
  ${tw`text-4xl`};
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
    background: ${theme`colors.dark`};
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
          {process.env.GATSBY_PORTFOLIO_PERSON}'s Front End Developer Portfolio
        </StyledH1>
        <HeaderBlurb>
          Creating beautiful and accessible websites for everyone!
        </HeaderBlurb>
      </SiteHeader>
      <StyledMain>
        <StyledContainer>{children}</StyledContainer>
      </StyledMain>
    </div>
  );
}
