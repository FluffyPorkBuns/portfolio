import * as React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// styled components
const StyledList = tw.ul`
  list-none
`;
const ListTitle = tw.h3`
  text-black
  font-bold
  text-xl
  mb-2
`;
const StyledItem = tw.li`
  p-6
  pb-20
  pt-14
  md:p-10
  flex
  flex-col
  md:flex-row
  md:even:flex-row-reverse
  odd:bg-teal
  text-dark
  md:rounded-md
  relative
  md:mt-12
  font-sans
  -mx-6
  md:mx-0
`;
const StyledItemImage = tw.div`
  relative
  rounded-md
  overflow-hidden
  mb-4
`;
const ContentWrap = tw.div`
  odd:ml-8
  even:mr-8
`;
const TechnologyList = tw.ul`
  flex
  flex-wrap
`;
const TechnologyTag = tw.li`
  bg-gray
  bg-opacity-10
  rounded-md
  py-1
  px-4
  lowercase
  mr-3
  mb-2
  text-sm
  font-medium
`;
const TechnologyTitle = tw.h4`
  mt-8
  mb-2
  font-semibold
  text-black
`;

// markup
const ProjectGallery = ({ portfolioItems }) => {
  const renderTags = ({ tags, id, isOdd }) =>
    tags.map((tag, index) => (
      <TechnologyTag
        key={`${id}-${index}`}
        style={{ background: isOdd ? "#ffffffaa" : "" }}
      >
        {tag}
      </TechnologyTag>
    ));

  const renderPortfolioItems = portfolioItems.edges.map((item, index) => (
    <StyledItem key={item.node.id}>
      <StyledItemImage
        css={[index % 2 === 0 && tw`mr-8`, index % 2 !== 0 && tw`ml-8`]}
      >
        <GatsbyImage
          image={getImage(item.node.thumbnail)}
          alt={item.node.title}
        />
      </StyledItemImage>
      <ContentWrap>
        <ListTitle>{item.node.title}</ListTitle>
        <p>{item.node.content}</p>
        <TechnologyTitle id={`technologies-${item.node.id}`}>
          Technologies:
        </TechnologyTitle>
        <TechnologyList aria-describedby={`technologies-${item.node.id}`}>
          {renderTags({
            tags: item.node.technologies,
            id: item.node.id,
            isOdd: index % 2 === 0,
          })}
        </TechnologyList>
      </ContentWrap>
    </StyledItem>
  ));

  return <StyledList>{renderPortfolioItems}</StyledList>;
};

export default ProjectGallery;
