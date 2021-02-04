import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import 'prismjs/themes/prism-okaidia.css';

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
    <div className="site-wrapper">
      <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="echvzb"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for visiting. You can now buy me a coffee!"
          data-color="#5F7FFF"
          data-position="right"
          data-x_margin="28"
          data-y_margin="18"
        />
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
  )
}
