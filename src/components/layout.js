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
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous" />
      </Helmet>
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
          <p>Made it with <span role='img' aria-label="heart">&#10084;&#65039;</span> by &copy; <a href='https://echvzb.me'>echvzb</a> {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}
