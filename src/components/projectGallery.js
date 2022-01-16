import * as React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// styled components
const StyledList = tw.ul`
  list-none
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-5
`;
const ListTitle = tw.h3`
  text-purple
  font-bold
`;
const StyledItem = tw.li`
  bg-teal
  text-dark
  rounded-md
  relative
  md:mt-12
  lg:hover:-translate-y-1
  transition-all
  font-sans
`;
const StyledItemImage = tw.div`
  w-full
  md:h-48
  md:-mt-14
  mb-2
  relative
  rounded-md
  overflow-hidden
`;
const StyledLink = tw(Link)`
  block p-4 pb-8
`;

// markup
const ProjectGallery = ({ portfolioItems }) => {
  const renderPortfolioItems = portfolioItems.edges.map((item) => (
    <StyledItem key={item.node.id}>
      <StyledLink to={`/${item.node.portfolioItemSlug}`}>
        <StyledItemImage>
          <GatsbyImage
            image={getImage(item.node.thumbnail)}
            alt={item.node.title}
          />
        </StyledItemImage>
        <ListTitle>{item.node.title}</ListTitle>
      </StyledLink>
    </StyledItem>
  ));

  return <StyledList>{renderPortfolioItems}</StyledList>;
};

export default ProjectGallery;
