import * as React from "react";
import tw, { GlobalStyles, theme } from "twin.macro";
import { Global, css } from "@emotion/react";
import { Helmet } from "react-helmet";

import Footer from "../components/footer";

// styled components
const StyledMain = tw.main`
  bg-offWhite
  text-gray
  font-sans
`;
const SiteHeader = tw.header`
  pt-12
  pb-16
  md:pt-28
  md:pb-20
`;
const StyledH1 = tw.h1`
  text-dark
  font-semibold
  text-3xl
  lg:text-5xl
  text-center
  mb-6
`;
const HeaderBlurb = tw.p`
  text-gray
  text-xl
  lg:text-2xl
  text-center
`;
const myGlobalStyles = `
  html {
    background: ${theme`colors.offWhite`};
  }
  body {
    font-family: "Open Sans";
  }
`;
export default function Layout({ links, title, children }) {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title lang="en">{`${process.env.GATSBY_PORTFOLIO_PERSON}'s Portfolio${
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
          Creating functional and accessible websites for everybody!
        </HeaderBlurb>
      </SiteHeader>
      <StyledMain>{children}</StyledMain>
      <Footer links={links} />
    </div>
  );
}
