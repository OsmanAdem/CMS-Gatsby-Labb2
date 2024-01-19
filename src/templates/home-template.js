import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
 
const homeTemplate = (contentfulPage) => {
  return (
    <main>
      <h2>{contentfulPage.title}</h2>
      {contentfulPage.image && <GatsbyImage alt={contentfulPage.title} image={contentfulPage.image.gatsbyImage}></GatsbyImage>}
      </main>
  )
}
 
export default homeTemplate

// import React from 'react';

// const HomeTemplate = ({ contentfulPage }) => {
//   return (
//     <main>
//       <h2>{contentfulPage.title}</h2>
//       <p>Home Template 2</p>
//     </main>
//   );
// };

// export default HomeTemplate;
