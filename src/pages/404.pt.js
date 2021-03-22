import React from "react"

import SEO from "../components/seo"
import LayoutCustom from "../components/LayoutCustom"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../utils/getThemeColor"

import * as S from "../components/Post/styled"

const NotFoundPage = () => {
  const { NotFoundImage } = useStaticQuery(
    graphql`
      query {
        NotFoundImage: file(relativePath: { eq: "jorge_banner.png" }) {
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <LayoutCustom>
      <SEO title="404: Not found" />
      <S.PostHeader>
        <S.PostTitle>404</S.PostTitle>
        <S.PostDescription>Rota não encontrada...</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <S.imgWrapper>
          <Img
            className="img-404"
            fixed={NotFoundImage.childImageSharp.fixed}
            alt="404 image"
          />
        </S.imgWrapper>
        <p>
          Esta rota não existe, tente ir para{" "}
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
          ou{" "}
          <AniLink
            to="/search/"
            title="Search"
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
          >
            Buscar
          </AniLink>
        </p>
      </S.MainContent>
    </LayoutCustom>
  )
}

export default NotFoundPage
