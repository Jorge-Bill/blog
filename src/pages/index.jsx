import React from "react"

import { graphql } from "gatsby"
import { LayoutHero, Seo, PostCard } from "@components"
import getThemeColor from "@utils/getThemeColor"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from "@styles/about"

const indexPage = ({ ...props }) => {
  const lastPosts = props.data.allMarkdownRemark.edges

  return (
    <LayoutHero {...props} bannerTags='images,travel,new-york'>
      <Seo title="Home" />
      <S.AboutHeader>
        <S.AboutTitle>Wellcome my friend</S.AboutTitle>
        </S.AboutHeader>
        <S.MainContent>
          <S.CustomParagraphy>I'm Jorge Mendes, and this is my world!</S.CustomParagraphy>
          <S.CustomParagraphy>I love code and Javascript, this website was born to share knowledge and help anyone that's been this unexpected journey to become a web developer.</S.CustomParagraphy>
          <S.CustomParagraphy>Good luck, and Live long and prosper!</S.CustomParagraphy>
          <S.CustomParagraphy>If you want to know more about my carrer go to
          {" "}
            <AniLink
              to="/about/"
              title="About"
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
            >
              About
            </AniLink>
          .</S.CustomParagraphy>
          <S.CustomParagraphy>If you want to read some articles go to
          {" "}
            <AniLink
              to="/posts/"
              title="Posts"
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
            >
              Posts
            </AniLink>
          .</S.CustomParagraphy>
          <S.CustomParagraphy>Like my favorite writer once wrote:</S.CustomParagraphy>
          <blockquote>
            <strong>“Where there's life there's hope, and need of vittles.”</strong> ― J.R.R. Tolkien, The Lord of the Rings
          </blockquote>
          <S.SubTitle> - See the Last Posts - </S.SubTitle>
          <PostCard postsData={lastPosts} />
        </S.MainContent>
    </LayoutHero>
  )
}

export const query = graphql`
  query LastPosts{
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
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

export default indexPage
