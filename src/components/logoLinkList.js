import * as React from "react";
import tw, { styled } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../tailwind.config";

import IconGatsby from "../images/Gatsby-Monogram.svg";
import IconContentful from "../images/contentful.svg";
import IconGraphQL from "../images/GraphQL.svg";
import IconTailwind from "../images/tailwindcss.svg";
import IconStyledComponents from "../images/styled-components.svg";

// styled components
const ListTitle = tw.h2`
  font-semibold
  text-offWhite
  w-full
  mb-2
  md:mr-2
  md:w-auto
`;
// style for list of links
const LinkList = tw.ul`
  flex
  list-none
`;
// style for list item
const LogoLinkListItem = tw.li`
  mr-2
  last:mr-0
`;
// style for circular anchor tag with the icon inside
const LogoLink = styled.a`
  ${tw`rounded-full`}
  ${tw`p-1`}
  ${tw`w-10`}
  ${tw`h-10`}
  ${tw`flex`}
  ${tw`items-center`}
  ${tw`justify-center`}
  ${tw`border-offWhite`}
  ${tw`border-2`}
  ${tw`hover:bg-offWhite`}
  ${tw`focus:bg-offWhite`}
  ${tw`transition-all`}
    & * {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  &:hover,
  &:focus {
    * {
      color: ${theme.colors.purple};
      fill: ${theme.colors.purple};
      stroke: ${theme.colors.purple};
    }
  }
`;
// style for icons
const LinkIcon = tw(FontAwesomeIcon)`
  text-offWhite
  group-hover:text-purple
  transition-all
`;
/**
 * a group of links represented as icons in a circle
 * can render links with URLs from CMS and also links
 * that are static
 */
export default function logoLinkList({
  linkList,
  links,
  id,
  title,
  cmsContent,
  ...rest
}) {
  const logoList = {
    gatsby: <IconGatsby />,
    contentful: <IconContentful />,
    graphQL: <IconGraphQL />,
    tailwind: <IconTailwind />,
    styledComponents: <IconStyledComponents />,
  };
  const renderLogo = ({ logoName, logoList }) => {
    if (logoList[logoName]) {
      return logoList[logoName];
    }
    return <div></div>;
  };
  const renderLinkItem = ({ linkData, links, cmsContent }) => {
    // get database entry for this link item if cmsContent is true
    const linkItem = cmsContent
      ? links.edges.find((l) => l.node.title === linkData.title).node
      : linkData;

    return (
      <LogoLinkListItem key={linkItem.id}>
        <LogoLink
          href={linkItem.url}
          className="group"
          title={linkItem.description}
        >
          {cmsContent || linkItem.faIcon ? (
            <LinkIcon
              icon={linkData.icon}
              className="group-hover:text-purple"
              size={linkData.size}
            />
          ) : (
            renderLogo({ logoName: linkItem.icon, logoList: logoList })
          )}
        </LogoLink>
      </LogoLinkListItem>
    );
  };

  return (
    <div {...rest}>
      <ListTitle id={id}>{title}</ListTitle>
      <LinkList aria-labelledby={id}>
        {linkList.map((l) =>
          renderLinkItem({ linkData: l, links: links, cmsContent: cmsContent }),
        )}
      </LinkList>
    </div>
  );
}
