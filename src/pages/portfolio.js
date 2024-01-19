import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from "../components/layout";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

const SecondPage = () => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>;
      },
    },
  };

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            id
            title
            image {
              gatsbyImage(width: 400)
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Portfolio page</h1>
      <ul>
        {data.allContentfulPortfolio.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <h2>{edge.node.title}</h2>
              {edge.node.image && <GatsbyImage alt={edge.node.title} image={edge.node.image.gatsbyImage}></GatsbyImage>}
              <p> {renderRichText(edge.node.content.raw, options)} </p>
            </li>
          );
        })}
      </ul>
      <Link to="/"> Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;

// import React from 'react';
// import { graphql, Link } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';

// import Layout from '../components/layout';
// import { renderRichText } from 'gatsby-source-contentful/rich-text';
// import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

// const PortfolioPage = ({ data }) => {
//   const options = {
//     renderMark: {
//       [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
//     },
//     renderNode: {
//       [INLINES.HYPERLINK]: (node, children) => {
//         const { uri } = node.data;
//         return (
//           <a href={uri} className="underline">
//             {children}
//           </a>
//         );
//       },
//       [BLOCKS.HEADING_2]: (node, children) => {
//         return <h2>{children}</h2>;
//       },
//     },
//   };

//   return (
//     <Layout>
//       <h1>Portfolio page</h1>
//       <ul>
//         {data.allContentfulPortfolio.edges.map((edge) => (
//           <li key={edge.node.id}>
//             <h2>{edge.node.title}</h2>
//             {edge.node.image && <GatsbyImage alt={edge.node.title} image={edge.node.image.gatsbyImage} />}
//             <p> {renderRichText(edge.node.content.raw, options)} </p>
//           </li>
//         ))}
//       </ul>
//       <Link to="/"> Go back to the homepage</Link>
//     </Layout>
//   );
// };

// export const query = graphql`
//   query {
//     allContentfulPortfolio {
//       edges {
//         node {
//           id
//           title
//           image {
//             gatsbyImage(width: 400)
//           }
//         }
//       }
//     }
//   }
// `;

// export default PortfolioPage;


