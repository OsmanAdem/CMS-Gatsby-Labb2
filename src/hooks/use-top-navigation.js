import { useStaticQuery, graphql } from 'gatsby';

const useTopNavigation = () => {
  const {allContentfulPage}  = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: {url: ASC}) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `);
  return allContentfulPage.edges;
  
}
export default useTopNavigation;

// import { useStaticQuery, graphql } from 'gatsby';

// const useTopNavigation = () => {
//   const { allContentfulPage } = useStaticQuery(graphql`
//     query {
//       allContentfulPage(sort: { fields: url, order: ASC }) {
//         edges {
//           node {
//             title
//             url
//           }
//         }
//       }
//     }
//   `);
//   return allContentfulPage.edges;
// };

// export default useTopNavigation;


 