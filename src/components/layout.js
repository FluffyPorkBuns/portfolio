import * as React from "react";
import tw, { GlobalStyles, styled } from "twin.macro";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import theme from "../theme/theme";

// styled components
const StyledMain = styled.main`
  background: #191919;
  color: #8e8e8e;
  ${tw`font-sans`};
`;
const StyledContainer = tw.div`
  max-w-4xl mx-auto p-6
`;
// content that appears on every page such as the title and global css
export default function Layout({ title, children }) {
  return (
    <ThemeProvider theme={theme.main}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${process.env.GATSBY_PORTFOLIO_PERSON}'s Portfolio${
          title ? " - " + title : ""
        }`}</title>
      </Helmet>
      <GlobalStyles />
      <StyledMain>
        <StyledContainer>{children}</StyledContainer>
      </StyledMain>
    </ThemeProvider>
  );
}
