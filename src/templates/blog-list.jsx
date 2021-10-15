import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { LayoutCustom, PostCard, Pagination, Seo } from '@components'

const BlogList = ({ ...props }) => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/posts' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <LayoutCustom>
      <Seo title="Posts" />
      <PostCard data={postList} />
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </LayoutCustom>
  )
}

BlogList.propTypes = {
  allMarkdownRemark: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  pageContext: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

BlogList.defaultProps = {
  allMarkdownRemark: {},
  pageContext: [],
  data: {},
}


export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            thumbnail
            background
            category
          }
          timeToRead
          id
        }
      }
    }
  }
`

export default BlogList
