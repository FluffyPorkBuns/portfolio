import * as React from "react";
import tw from "twin.macro";

// styled components
const StyledContainer = tw.div`
  max-w-4xl mx-auto px-6 pt-12 pb-24
`;
export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
