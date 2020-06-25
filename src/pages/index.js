import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query getPosts {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
              description
              title
            }
            timeToRead
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            id,
            fields: { slug },
          },
        }) => (
          <PostItem
            key={id}
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={toString(timeToRead)}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
