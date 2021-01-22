import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import 'prismjs/themes/prism-okaidia.css';
import Helmet from 'react-helmet';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <div className="site-wrapper">
        <header className="site-header">
          <div className="site-title">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <div className='border-logo-grd'>
            <div className='logo-header-container'>
              <div className='logo-header'></div>
            </div>
          </div>
          <Navigation />
        </header>
        {children}
        <footer className="site-footer">
          <p>Made with <span role='img' aria-label="heart">&#10084;&#65039;</span> by &copy; {new Date().getFullYear()} <a href='https://echvzb.me'>echvzb</a></p>
        </footer>
      </div>
    </div>
  )
}
