import React from "react"

import { LayoutCustom, Timeline, Seo } from "../components"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import { storyEng } from '../utils/my_story'
import { about_me } from '../utils/about_me'

import * as S from "../styles/about"

const AboutPage = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "aboutPic.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  )

  return (
    <LayoutCustom>
      <Seo title="About" />
      <S.AboutHeader>
        <S.AboutTitle>About Me</S.AboutTitle>
        <S.AboutDescription>Hello World! My name is Jorge.</S.AboutDescription>
      </S.AboutHeader>
      <S.MainContent>
        <S.imgWrapper>
          <Img
            className="img-about"
            image={aboutImage.childImageSharp.gatsbyImageData}
            alt="jorge profile picture"
          />
        </S.imgWrapper>
        {about_me.map((item, i) => (<p key={i}>{item}</p>))}
        <br />
        <S.AboutHighlight>Here you can see a timeline of my story as a web developer</S.AboutHighlight>
        <Timeline data={storyEng} />
      </S.MainContent>
    </LayoutCustom>
  )
}

export default AboutPage
