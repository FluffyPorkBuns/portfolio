import * as React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// styled components
const StyledList = tw.ul`
  list-none
`;
const ListTitle = tw.h3`
  text-purple
  font-bold
  text-xl
  mb-4
`;
const StyledItem = tw.li`
  p-8
  pb-20
  flex
  even:flex-row-reverse
  odd:bg-teal
  text-dark
  rounded-md
  relative
  md:mt-12
  font-sans
`;
const StyledItemImage = tw.div`
  odd:mr-8
  even:ml-8
  relative
  rounded-md
  overflow-hidden
`;
const ContentWrap = tw.div`
  odd:ml-8
  even:mr-8
`;

// markup
const ProjectGallery = ({ portfolioItems }) => {
  const renderTags = ({ tags, id }) =>
    tags.map((tag, index) => <li key={`${id}-${index}`}>{tag}</li>);
  const renderPortfolioItems = portfolioItems.edges.map((item) => (
    <StyledItem key={item.node.id}>
      <StyledItemImage>
        <GatsbyImage
          image={getImage(item.node.thumbnail)}
          alt={item.node.title}
        />
      </StyledItemImage>
      <ContentWrap>
        <ListTitle>{item.node.title}</ListTitle>
        <p>{item.node.content}</p>
        <h4 id={`technologies-${item.node.id}`}>Technologies</h4>
        <ul aria-describedby={`technologies-${item.node.id}`}>
          {renderTags({ tags: item.node.technologies, id: item.node.id })}
        </ul>
      </ContentWrap>
    </StyledItem>
  ));

  return <StyledList>{renderPortfolioItems}</StyledList>;
};

export default ProjectGallery;
