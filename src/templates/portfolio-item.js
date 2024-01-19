// import React from 'react';
// import { graphql } from 'gatsby';
// // import Seo from '../components/seo';

// export const query = graphql`
//  query ($slug: String!) {
//    contentfulPortfolio(slug: { eq: $slug }) {
//      title
//    }
//  }
// `;

// const PortfolioItem = ({ data }) => {
//  const { contentfulPortfolio } = data;
//  return (
// <>
// {/* <Seo title={contentfulPortfolio.title} /> */}
// <main>
// <h1>{contentfulPortfolio.title}</h1>
// </main>
// </>
//  );
// };
// export default PortfolioItem;

// import React from 'react';
// import Seo from '../components/seo';

// const PortfolioItem = ({ pageContext }) => {
//   const { title } = pageContext;

//   return (
//     <>
//       <Seo title={title} />
//       <main>
//         <h1>{title}</h1>
//       </main>
//     </>
//   );
// };

// export default PortfolioItem;

import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
 
export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolio(slug: { eq: $slug }) {
      title 
      description {
        description 
      }
      image {
        gatsbyImage(width: 1000)
      }
    }
  }
`;
 
const portfolioItem = (props) =>  (
    <Layout>
      
      
        <h1>{props.data.contentfulPortfolio.title}</h1>
        {props.data.contentfulPortfolio.image && <GatsbyImage alt={props.data.contentfulPortfolio.title} image={props.data.contentfulPortfolio.image.gatsbyImage}></GatsbyImage>}
              <div>{props.data.contentfulPortfolio.description.description}</div>
       
        
  
    </Layout>
  );
 
 
export default portfolioItem;


