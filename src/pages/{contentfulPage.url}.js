import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AboutTemplate from '../templates/about-template';
import HomeTemplate from '../templates/home-template';
import PortfolioTemplate from '../templates/portfolio-template';
import ContactTemplate from "../templates/contact-template";

const Page = (props) => {
  const { data } = props;
  const { contentfulPage } = data;

  const getTemplate = (contentfulPage) => {
    switch (contentfulPage.template) {
      case 'contact':
        return <ContactTemplate {...contentfulPage} />;
      case 'about':
        return <AboutTemplate {...contentfulPage} />;
      case 'portfolio':
        return <PortfolioTemplate {...contentfulPage} />;
      default:
        return <HomeTemplate {...contentfulPage} />;
    }
  };

  return <Layout>{getTemplate(contentfulPage)}</Layout>;
};

export const query = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      template
      title
      url
      image {
        gatsbyImage(width: 1000)
      }
    }
  }
`;

export default Page;

// import * as React from 'react';
// import { graphql } from 'gatsby';
// import Layout from '../components/layout';
// import AboutTemplate from '../templates/about-template';
// import HomeTemplate from '../templates/home-template';
// import PortfolioTemplate from '../templates/portfolio-template';

// const Page = (props) => {
//   const { data } = props;
//   const { contentfulPage } = data;

//   const getTemplate = (contentfulPage) => {
//     switch (contentfulPage.template) {
//       case 'about':
//         return <AboutTemplate contentfulPage={contentfulPage} />;
//       case 'portfolio':
//         return <PortfolioTemplate contentfulPage={contentfulPage} />;
//       default:
//         return <HomeTemplate contentfulPage={contentfulPage} />;
//     }
//   };

//   return <Layout>{getTemplate(contentfulPage)}</Layout>;
// };

// export const query = graphql`
//   query pageQuery($id: String) {
//     contentfulPage(id: { eq: $id }) {
//       template
//       title
//       url
//     }
//   }
// `;

// export default Page;

