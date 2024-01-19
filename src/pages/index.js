import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


//react-component
//alla componenter under /src/pages blir automatiskt sidor
//sidans namn = namnet på javascript-filen (dock - index.js = sajtens första sida)
const IndexPage = () => (
  <Layout>
    <Link to="/portfolio">Se min portfolio</Link>
  </Layout>
)
//denna konstant sätter titeln på sidan
export const Head = () => <title>Home Page</title>

export default IndexPage;

// import * as React from 'react';
// import { Link } from 'gatsby';
// import Layout from '../components/layout';

// const IndexPage = () => (
//   <Layout>
//     <Link to="/portfolio">See my portfolio</Link>
//   </Layout>
// );

// export const Head = () => <title>Home Page</title>;

// export default IndexPage;

