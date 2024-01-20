import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <main>{children}</main>
      <footer className="footer">
  <div style={{ marginTop: '1.5rem', fontSize: '1rem', textAlign: 'center' }}>
    <span style={{ fontWeight: 'bold', color: 'black' }}>Osman Adem</span> | ITHS Courses | Headless CMS
  </div>
</footer>
    </>
  );
}

export default Layout;
