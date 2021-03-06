import * as React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// styled components
const StyledList = tw.ul`
  list-none
`;
// title for this project
const ListTitle = tw.h3`
  text-black
  font-bold
  text-xl
  mb-2
`;
// the list item containing the project component
const StyledItem = tw.article`
  bg-teal
  p-6
  pb-20
  pt-14
  md:p-10
  flex
  flex-col
  md:flex-row
  text-dark
  md:rounded-md
  relative
  md:mt-12
  font-sans
  -mx-6
  md:mx-0
`;
const StyledItemReverse = tw(StyledItem)`
  md:flex-row-reverse
  bg-offWhite
`;
// project thumbnail image
const StyledItemImage = tw.div`
  relative
  rounded-md
  overflow-hidden
  mb-4
  md:mb-0
  md:mr-8
`;
const StyledItemImageReverse = tw(StyledItemImage)`
  md:mr-0
  md:ml-8
`;
const StyledContent = tw.div`
  md:ml-8
`;
const StyledContentReverse = tw(StyledContent)`
  md:ml-0
  md:mr-8
`;
// list of tags showing the technologies used for the project
const TechnologyList = tw.ul`
  flex
  flex-wrap
`;
// the tag
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

/**
 * A gallery of projects with alternating background colors using data from CMS.
 * Images become stacked on top of content on small screens
 */
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

  const renderPortfolioItems = portfolioItems.edges.map((item, index) => {
    const isOdd = index % 2 === 0;
    return (
      <li key={item.node.id}>
        {isOdd ? (
          <StyledItem>
            <StyledItemImage>
              <GatsbyImage
                image={getImage(item.node.thumbnail)}
                alt={item.node.title}
              />
            </StyledItemImage>
            <StyledContent>
              <header>
                <ListTitle>{item.node.title}</ListTitle>
              </header>
              <p>{item.node.content}</p>
              <footer>
                <TechnologyTitle id={`technologies-${item.node.id}`}>
                  Technologies:
                </TechnologyTitle>
                <TechnologyList
                  aria-describedby={`technologies-${item.node.id}`}
                >
                  {renderTags({
                    tags: item.node.technologies,
                    id: item.node.id,
                    isOdd: isOdd,
                  })}
                </TechnologyList>
              </footer>
            </StyledContent>
          </StyledItem>
        ) : (
          <StyledItemReverse>
            <StyledItemImageReverse>
              <GatsbyImage
                image={getImage(item.node.thumbnail)}
                alt={item.node.title}
              />
            </StyledItemImageReverse>
            <StyledContentReverse>
              <header>
                <ListTitle>{item.node.title}</ListTitle>
              </header>
              <p>{item.node.content}</p>
              <footer>
                <TechnologyTitle id={`technologies-${item.node.id}`}>
                  Technologies:
                </TechnologyTitle>
                <TechnologyList
                  aria-describedby={`technologies-${item.node.id}`}
                >
                  {renderTags({
                    tags: item.node.technologies,
                    id: item.node.id,
                    isOdd: isOdd,
                  })}
                </TechnologyList>
              </footer>
            </StyledContentReverse>
          </StyledItemReverse>
        )}
      </li>
    );
  });

  return <StyledList>{renderPortfolioItems}</StyledList>;
};

export default ProjectGallery;
