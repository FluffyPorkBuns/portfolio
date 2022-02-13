import * as React from "react";
import tw from "twin.macro";

// styled components
const StyledContainer = tw.div`
  max-w-4xl
  mx-auto
  py-6
  px-6
  mb-6
  md:pt-12
  md:pb-24
  `;
const LessPaddingContainer = tw(StyledContainer)`
  md:py-6
  md:mb-0
`;
export default function Container({ lessPadding, children, ...rest }) {
  if (lessPadding) {
    return <LessPaddingContainer {...rest}>{children}</LessPaddingContainer>;
  }
  return <StyledContainer {...rest}>{children}</StyledContainer>;
}
