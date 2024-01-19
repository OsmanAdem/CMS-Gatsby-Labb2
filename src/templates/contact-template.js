import React from 'react';
import { useForm } from 'react-hook-form';
import { useStaticQuery, graphql } from 'gatsby';

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
      <p>Kontakta oss</p>
      <ul>
                {allContentfulLink.edges.map((edge) =>{
                    return(
                       <li key={edge.node.id}><a href={edge.node.url}>{edge.node.title}</a></li>         
                    );
                })}
            </ul>
    </main>
  );
};

export default ContactTemplate;


