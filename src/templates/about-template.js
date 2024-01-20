import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const AboutTemplate = (contentfulPage) => {
  return (
    <>
      <main>
        <h2>{contentfulPage.title}</h2>
        {contentfulPage.image && <GatsbyImage alt={contentfulPage.title} image={contentfulPage.image.gatsbyImage}></GatsbyImage>}
      </main>
    </>
  );
}

export default AboutTemplate;


