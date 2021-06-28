import React from "react"

import Seo from "../components/seo"
import LayoutCustom from "../components/LayoutCustom/"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../utils/getThemeColor"

import * as S from "../components/Post/styled"

const NotFoundPage = () => {
  const { NotFoundImage } = useStaticQuery(
    graphql`
      query {
        NotFoundImage: file(relativePath: { eq: "jorge_banner.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  )

  return (
    <LayoutCustom>
      <Seo title="404: Not found" />
      <S.PostHeader>
        <S.PostTitle>404</S.PostTitle>
        <S.PostDescription>Route not found...</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <S.imgWrapper>
          <Img
            className="img-404"
            image={NotFoundImage.childImageSharp.gatsbyImageData}
            alt="404 image"
          />
        </S.imgWrapper>
        <p>
          This route does not exist or is incorrect, try to go back to{" "}
          <AniLink
            to="/"
            title="Home"
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
          >
            Home
          </AniLink>{" "}
          or{" "}
          <AniLink
            to="/search/"
            title="Search"
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
          >
            Search
          </AniLink>
        </p>
      </S.MainContent>
    </LayoutCustom>
  )
}

export default NotFoundPage
