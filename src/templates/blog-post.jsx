import React from 'react'

import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import { LayoutCustom, RecomendedPosts, Comments, Seo } from '@components'

import * as S from '@styles/post'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <LayoutCustom>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description} image={post.frontmatter.image} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min of read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <RecomendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </LayoutCustom>
  )
}

BlogPost.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  pageContext: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
