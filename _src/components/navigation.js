import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "./themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/series">Series</Link>
    <ThemeChanger/>
  </nav>
  
)