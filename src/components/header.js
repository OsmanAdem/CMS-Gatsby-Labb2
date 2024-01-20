import * as React from 'react';
import { Link } from 'gatsby';
import useTopNavigation from '../hooks/use-top-navigation';

const Header = ({ siteTitle }) => {
  const topNavigation = useTopNavigation();

  if (!Array.isArray(topNavigation)) {
    console.error('topNavigation is not an array:', topNavigation);
    return null;
  }

  return (
    <header>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ITHS Courses</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {topNavigation.map(({ node }, index) => (
            <li className='nav-item' key={index}>
              {typeof node === 'object' && node.title && (
                <Link className="nav-link" to={node.url}>{node.title}</Link>
              )}
            </li>
          ))}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </header>
  );
}

export default Header;





 