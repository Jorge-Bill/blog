import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="blue"
      category="Misc"
      date="24 de Junho de 2020"
      timeToRead="5"
      title="Lorem ipsum"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis nisi, et ratione quas soluta neque! Voluptatem fugit in quos officiis laboriosam illo eaque dolorum? A quasi eos sed voluptate voluptates"
    />
  </Layout>
)

export default IndexPage
