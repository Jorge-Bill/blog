import React from "react"

import { LayoutHero, Timeline, Skills, Seo } from "@components"
import { about_me } from '@utils/about_me'
import { journeyEng } from '@utils/journey'
import { hardSkills, softSkills } from '@utils/skills'

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import { Document } from '@styled-icons/fluentui-system-regular/Document'

import resume from '/public/assets/docs/JORGE_MENDES_resume.pdf'
import letter from '/public/assets/docs/JORGE_MENDES_cover_letter.pdf'

import * as S from "@styles/default"

const AboutPage = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "profile.jpeg" }) {
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
      <S.DefaultHeader>
        <S.DefaultTitle>Hello World!</S.DefaultTitle>
        <S.DefaultDescription> I'm Jorge Mendes</S.DefaultDescription>
      </S.DefaultHeader>
      <S.MainContent>
        <S.imgWrapper>
          <Img
            className="img-default"
            image={aboutImage.childImageSharp.gatsbyImageData}
            alt="jorge profile picture"
          />
        </S.imgWrapper>
        {about_me.map((item, i) => (<S.CustomParagraphy key={i}>{item}</S.CustomParagraphy>))}
        <S.SubTitle>My Skills</S.SubTitle>
        <S.SkillWrapper>
          <Skills title='hard skills' data={hardSkills} />
          <Skills title='soft skills' data={softSkills} />
        </S.SkillWrapper>
        <center>
          <S.CustomParagraphy>
            To know more about my skills access my {' '}
            <a href="https://github.com/Jorge-Bill" target="_blank" rel="noopener noreferrer">Github</a>{' '}
            or {' '}
            profile.
          </S.CustomParagraphy>
        </center>
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
        <S.SubTitle>My journey as a web developer</S.SubTitle>
        <Timeline data={journeyEng} />
      </S.MainContent>
    </LayoutHero>
  )
}

export default AboutPage
