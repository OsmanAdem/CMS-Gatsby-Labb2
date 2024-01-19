import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import Navbar from "./navbar";

import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
    {/* < Navbar /> */}
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <main>{children}</main>
      <footer className='footer'
        style={{
          marginTop: 'var(--space-5)',
          fontSize: 'var(--font-sm)',
        }}
      >
        <span>Osman Adem, IT-Högskolan, Headless CMS</span>
      </footer>
    </>
  );
}

export default Layout;

// import * as React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Header from './header';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/style.css';

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteMetadata {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
//       <main>{children}</main>
//       <footer
//         style={{
//           marginTop: 'var(--space-5)',
//           fontSize: 'var(--font-sm)',
//         }}
//       >
//         <span>Osman Adem, IT-Högskolan, Headless CMS</span>
//       </footer>
//     </>
//   );
// };

// export default Layout;
