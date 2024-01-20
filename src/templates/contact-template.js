import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ContactTemplate = ( contentfulPage ) => {
  const {allContentfulLink} = useStaticQuery(graphql`
  query {
    allContentfulLink {
      edges {
        node {
          url
          title
        }
      }
    }
  }
`);

  return (
    <main>
      <h2>{contentfulPage.title}</h2>
      <p>Contact Us</p>
      <ul>
                {allContentfulLink.edges.map((edge) =>{
                    return(
                       <li key={edge.node.id}><a href={edge.node.url}>{edge.node.title}</a></li>         
                    );
                })}
            </ul>
            {contentfulPage.image && <GatsbyImage alt={contentfulPage.title} image={contentfulPage.image.gatsbyImage}></GatsbyImage>}
    </main>
  );
};

export default ContactTemplate;


