import React from 'react'
import { useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
 
const PortfolioTemplate = (contentfulPage) => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulPortfolio {
      edges {
        node {
          title 
          description {
            description 
          }
          image {
            gatsbyImage(width: 1000)
          }
          slug
        }
      }
    }
  }
`)
  return (
    <main>
      <h2>{contentfulPage.title}</h2>
      <ul>
        {data.allContentfulPortfolio.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <Link to={"/portfolio/"+edge.node.slug}><h2>{edge.node.title}</h2></Link>
              {edge.node.image && <GatsbyImage alt={edge.node.title} image={edge.node.image.gatsbyImage}></GatsbyImage>}
              <div>{edge.node.description.description}</div>
            </li>
          );
        })}
      </ul>
    </main>
  )
}
 
export default PortfolioTemplate

// import React from 'react';
// import { Link, graphql } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// const PortfolioTemplate = ({ data }) => {
//   const { contentfulPortfolio, allContentfulPortfolio } = data;

//   return (
//     <main>
//       <h2>{contentfulPortfolio.title}</h2>
//       <p>Portfolio Template</p>
//       <ul>
//         {allContentfulPortfolio.edges.map((edge) => {
//           const image = getImage(edge.node.thumbnail);

//           return (
//             <li key={edge.node}>
//               <h2>{edge.node.title}</h2>
//               {edge.node.thumbnail && (
//                 <>
//                   <GatsbyImage alt={edge.node.title} image={image} />
//                   <Link to={`/portfolio/${edge.node}`}>View details</Link>
//                 </>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </main>
//   );
// };

// export const query = graphql`
//   query($slug: String!) {
//     contentfulPortfolio(slug: { eq: $slug }) {
//       title
//     }
//     allContentfulPortfolio {
//       edges {
//         node {
//           title
//           thumbnail
//         }
//       }
//     }
//   }
// `;

// export default PortfolioTemplate;


