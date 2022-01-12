import * as React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../src/components/layout";

const StyledH1 = tw.h1`
  font-bold text-3xl mb-4
`;

const StyledImage = tw(GatsbyImage)`
  mb-5
`;

// markup
const ProjectPage = ({ pageContext }) => {
  const { project } = pageContext;

  return (
    <Layout title={project.title}>
      <StyledH1>{project.title}</StyledH1>{" "}
      <StyledImage image={getImage(project.thumbnail)} alt={project.title} />
      <p>{project.content}</p>
    </Layout>
  );
};

export default ProjectPage;
