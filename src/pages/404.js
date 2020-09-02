import React from "react"

import SEO from "../components/seo"
import LayoutCustom from "../components/LayoutCustom/"

const NotFoundPage = () => (
  <LayoutCustom>
    <SEO title="404: Not found" />
    <h1>404 NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </LayoutCustom>
)

export default NotFoundPage
