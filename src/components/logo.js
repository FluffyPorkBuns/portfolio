import * as React from "react";
import tw from "twin.macro";

// styled components
const LogoWrap = tw.div`
  flex justify-center mb-6 md:absolute md:top-1 md:left-1
`;
const LogoContainer = tw.div`
  md:inline-block rounded-lg p-2 m-4 bg-teal
`;
const LogoLetter = tw.span`
  font-sans text-5xl text-purple
`;
const LogoLetter2 = tw(LogoLetter)`
  text-blue text-offWhite
`;

// TODO: make a real logo
export default function Logo() {
  return (
    <LogoWrap>
      <LogoContainer>
        <LogoLetter>E</LogoLetter>
        <LogoLetter2>H</LogoLetter2>
      </LogoContainer>
    </LogoWrap>
  );
}
