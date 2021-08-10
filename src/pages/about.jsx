import React from "react"

import { LayoutHero, Timeline, Seo } from "@components"
import { about_me } from '@utils/about_me'
import { storyEng } from '@utils/my_story'

import { GatsbyImage as Img } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Document } from '@styled-icons/fluentui-system-regular/Document'

import resume from '/public/assets/docs/JORGE_MENDES_resume.pdf'
import letter from '/public/assets/docs/JORGE_MENDES_cover_letter.pdf'

import * as S from "@styles/about"

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
    <LayoutHero title='About Me' bannerTags='nature,cloud,sunset'>
      <Seo title="About" />
      <S.AboutHeader>
        <S.AboutTitle>Hello World!</S.AboutTitle>
        <S.AboutDescription> I'm Jorge Mendes</S.AboutDescription>
      </S.AboutHeader>
      <S.MainContent>
        <S.imgWrapper>
          <Img
            className="img-about"
            image={aboutImage.childImageSharp.gatsbyImageData}
            alt="jorge profile picture"
          />
        </S.imgWrapper>
        {about_me.map((item, i) => (<S.CustomParagraphy key={i}>{item}</S.CustomParagraphy>))}
        <S.CardsWrapper>
          <S.CustomCard>
            <Document />
            <a href={resume} target='_blank' rel='noopener noreferrer'>My curriculum vitae</a>
          </S.CustomCard>
          <S.CustomCard>
            <Document />
            <a href={letter} target='_blank' rel='noopener noreferrer'>My cover letter</a>
          </S.CustomCard>
        </S.CardsWrapper>
        <br />
        <S.SubTitle>My journey as a web developer</S.SubTitle>
        <Timeline data={storyEng} />
      </S.MainContent>
    </LayoutHero>
  )
}

export default AboutPage
