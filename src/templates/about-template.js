import React from 'react';
// import Seo from '../components/seo';
import { GatsbyImage } from 'gatsby-plugin-image';

const AboutTemplate = (contentfulPage) => {
  return (
    <>
      {/* <Seo title={contentfulPage.title} description={contentfulPage.description} /> */}
      <main>
        <h2>{contentfulPage.title}</h2>
        {contentfulPage.image && <GatsbyImage alt={contentfulPage.title} image={contentfulPage.image.gatsbyImage}></GatsbyImage>}
      </main>
    </>
  );
}

export default AboutTemplate;

// import React from 'react';
// import Seo from '../components/seo';

// const AboutTemplate = ({ contentfulPage }) => {
//   return (
//     <>
//       <Seo title={contentfulPage.title} description={contentfulPage.description} />
//       <main>
//         <h2>{contentfulPage.title}</h2>
//         <p>About template</p>
//       </main>
//     </>
//   );
// };

// export default AboutTemplate;


