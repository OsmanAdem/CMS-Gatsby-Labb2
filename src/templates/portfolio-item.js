import React from 'react';
import { graphql } from 'gatsby';
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


