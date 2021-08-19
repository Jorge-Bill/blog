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
        <S.DefaultTitle>LOST WEBSITE</S.DefaultTitle>
        <S.DefaultDescription>This page not exist or the url is invalid...</S.DefaultDescription>
      </S.DefaultHeader>
        <S.imgWrapper>
          <StaticImage
            className="img-default"
            src='../images/icon.png'
            alt='404 avatar'
            placeholder='blurred'
            width={400}
          />
        </S.imgWrapper>
        <S.MainContent>
        <center>
          <S.CustomParagraphy>
            Try go back to{" "}
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
            </AniLink> for something.
          </S.CustomParagraphy>
        </center>
      </S.MainContent>
    </LayoutCustom>
  )


export default NotFoundPage
