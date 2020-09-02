import React from "react"
import LayoutCustom from "../components/LayoutCustom"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <LayoutCustom>
    <SEO title="Search" />
    <Search />
  </LayoutCustom>
)

export default SearchPage
