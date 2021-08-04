import React from "react"
import { graphql } from "gatsby"
import { LayoutHero, Seo } from "../components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../utils/getThemeColor"

import * as S from "../styles/about"

const indexPage = ({ ...props }) => {
  const lastPosts = props.data.allMarkdownRemark.edges

  return (
    <LayoutHero {...props} bannerTags='images,travel,new-york'>
      <Seo title="Home" />
      <S.AboutHeader>
        <S.AboutTitle>Wellcome my friend</S.AboutTitle>
        </S.AboutHeader>
        <S.MainContent>
          <p>I'm Jorge Mendes, and this is my world!</p>
          <p>I love code and Javascript, this website was born to share knowledge and help anyone that's been this unexpected journey to become a web developer.</p>
          <p>Good luck, and Live long and prosper!</p>
          <p>If you want to know more about my carrer go to
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
          .</p>
          <p>If you want to read some articles go to
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
          .</p>
          <p>Like my favorite writer once wrote:</p>
          <p><strong>“Where there's life there's hope, and need of vittles.”</strong> ― J.R.R. Tolkien, The Lord of the Rings </p>

          <S.AboutDescription>See the Last Posts</S.AboutDescription>
          <S.LastPostsWrapper>
          {lastPosts.map(
            ({
              node: {
                frontmatter: { thumbnail, date, description, title },
                timeToRead,
                id,
                fields: { slug },
              },
            }) => (
              <S.LastPostsCard key={id}>
                <S.LastPostsImage src={thumbnail} alt={title} />
                <S.LastPostsCardContent>
                  <S.LastPostsTitle>{title}</S.LastPostsTitle>
                  <S.LastPostsInfo>{date} - {timeToRead} min of read</S.LastPostsInfo>
                  <S.LastPostsDesc>{description}</S.LastPostsDesc>
                  <S.LastPostsLink
                    to={slug}
                    title={title}
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    duration={0.6}
                  >
                    Read more
                  </S.LastPostsLink>
                </S.LastPostsCardContent>
              </S.LastPostsCard>
            )
          )}
          </S.LastPostsWrapper>

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
          }
          timeToRead
          id
        }
      }
    }
  }
`

export default indexPage
