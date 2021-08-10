import React from "react"

import { LayoutCustom, Seo } from "@components"
import getThemeColor from "@utils/getThemeColor"

import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from "@styles/default"

const NotFoundPage = () => (
    <LayoutCustom>
      <Seo title="404: Not found" />
      <S.DefaultHeader>
        <S.DefaultTitle>404</S.DefaultTitle>
        <S.DefaultDescription>Route not found...</S.DefaultDescription>
      </S.DefaultHeader>
      <S.MainContent>
        <S.imgWrapper>
          <StaticImage
            className="img-404"
            src='../images/icon.png'
            alt='404 image'
            placeholder='blurred'
          />
        </S.imgWrapper>
        <center>
          <S.CustomParagraphy>
            This route does not exist or is incorrect, try go back to{" "}
            <AniLink
              to="/"
              title="Home"
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
            >
              Home
            </AniLink>,{" "}
            <AniLink
              to="/posts/"
              title="Posts"
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
            >
              Posts
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
          </S.CustomParagraphy>
        </center>
      </S.MainContent>
    </LayoutCustom>
  )


export default NotFoundPage
