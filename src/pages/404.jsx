import React from "react"

import { LayoutCustom, Seo } from "../components"
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../utils/getThemeColor"

import * as S from "../styles/post"

const NotFoundPage = () => (
    <LayoutCustom>
      <Seo title="404: Not found" />
      <S.PostHeader>
        <S.PostTitle>404</S.PostTitle>
        <S.PostDescription>Route not found...</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <S.imgWrapper>
          <StaticImage
            className="img-404"
            src='../images/jorge_banner.png'
            alt='404 image'
            placeholder='blurred'
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


export default NotFoundPage
