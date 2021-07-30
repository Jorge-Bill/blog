import React from "react"

import { LayoutHero, Seo } from "../components"
import { about_me } from '../utils/about_me'

import * as S from "../styles/about"


const indexPage = () => (
  <LayoutHero>
    <Seo title="Home" />
    <S.AboutHeader>
        <S.AboutTitle>About Me</S.AboutTitle>
        <S.AboutDescription>Hello World! My name is Jorge.</S.AboutDescription>
      </S.AboutHeader>
      <S.MainContent>
        {about_me.map((item, i) => (<p key={i}>{item}</p>))}
      </S.MainContent>
  </LayoutHero>
)

export default indexPage
