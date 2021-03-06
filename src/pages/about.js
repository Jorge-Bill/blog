import React from "react"
import LayoutCustom from "../components/LayoutCustom/"
import Timeline from '../components/Timeline/index';
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"

import * as S from "../components/Post/styled"
import { storyEng } from '../utils/story';

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
      <S.PostHeader>
        <S.PostTitle>About Me</S.PostTitle>
        <S.PostDescription>Hello World! My name is Jorge.</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <S.imgWrapper>
          <Img
            className="img-about"
            image={aboutImage.childImageSharp.gatsbyImageData}
            alt="jorge profile picture"
          />
        </S.imgWrapper>
        <hr />
        <p>
          I have had contact with T.I, since I was twelve years old, when in my
          first contact with a Semp Toshiba desktop computer with Pentium 4
          processor, 256gb of RAM and HD of 80 gb.
        </p>
        <p>
          I was fascinated and since then, have not been able to distance myself
          from this stunning area. I took small courses, and in 2010 joined the
          technical course in computer science, which allowed me to advance in
          knowledge, with which I worked as a freelancer for about two years,
          always improving my skills.
        </p>
        <p>
          In the year of two thousand twelve, I started my career as public
          agent, allowing me develop a project with the teenagers of the
          institution, teaching Arduino, using the principles of a basic kit in
          primary applications allowing learning of concepts of physics and
          mathematics.
        </p>
        <p>
          Thinking about getting to a higher level, I sought a degree, I chose
          the course on Internet Systems at the{" "}
          <strong>Faculty of Technology of São Roque - Fatec</strong>, a
          reference in the region that has high-level professionals and
          know-how, contributing to a better understanding of the market.
        </p>
        <p>
          Since I got my colege degree, i moved to São Paulo, one of the
          greatests citys with a I.T market.
        </p>
        <p>
          By the time pass, I learned <strong>front-end</strong>,{" "}
          <strong>back-end</strong>,<strong>data</strong>, and{" "}
          <strong>infra-structure</strong>, as well, and start to develop my
          projects and systems.
        </p>
        <p>
          This way I keep my skills improving and becoming a better developer.
        </p>
        <hr />
        <Timeline data={storyEng} />
        <hr />
      </S.MainContent>
    </LayoutCustom>
  )
}

export default AboutPage
