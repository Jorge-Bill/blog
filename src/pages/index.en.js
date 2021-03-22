import React from 'react'
import Link from 'gatsby-link'
import LayoutCustom from "../components/LayoutCustom"

const IndexPage = (props) => (
  <LayoutCustom>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/search/">Go to search</Link>
    </div>
  </LayoutCustom>
)

export default IndexPage