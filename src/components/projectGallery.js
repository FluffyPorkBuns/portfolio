import * as React from "react";
import tw, { styled, theme } from "twin.macro";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// styled components
const StyledList = tw.ul`
  list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5
`;
const ListTitle = styled.h3`
  color: ${theme`colors.purple`};
  ${tw`font-bold`}
`;
const StyledItem = styled.li`
  background: ${theme`colors.teal`};
  color: ${theme`colors.black`};
  ${tw`rounded-md`}
  ${tw`p-4`}
  ${tw`relative`}
  ${tw`mt-12`}
  ${tw`transform`}
  ${tw`hover:-translate-y-1`}
  ${tw`transition-all`}
`;
const StyledItemImage = styled.div`
  width: 237px;
  height: 180px;
  ${tw`-mt-14`}
  ${tw`mb-2`}
  ${tw`relative`}
  ${tw`rounded-md`}
  ${tw`overflow-hidden`}
`;

// markup
const ProjectGallery = ({ portfolioItems }) => {
  const renderPortfolioItems = portfolioItems.edges.map((item) => (
    <StyledItem key={item.node.id}>
      <Link to={`/${item.node.portfolioItemSlug}`}>
        <StyledItemImage>
          <GatsbyImage
            image={getImage(item.node.thumbnail)}
            alt={item.node.title}
          />
        </StyledItemImage>
        <ListTitle>{item.node.title}</ListTitle>
        <p>{item.node.content}</p>
      </Link>
    </StyledItem>
  ));

  return <StyledList>{renderPortfolioItems}</StyledList>;
};

export default ProjectGallery;
