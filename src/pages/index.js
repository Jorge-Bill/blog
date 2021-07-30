import React from "react"
import { LayoutHero, Seo } from "../components"

import * as S from "../styles/about"

const indexPage = () => (
  <LayoutHero>
    <Seo title="Home" />
    <S.AboutHeader>
      <S.AboutTitle>Wellcome my friend</S.AboutTitle>
      </S.AboutHeader>
      <S.MainContent>
        <p>I'm Jorge Mendes, and this is my world!</p>
        <p>I love code and Javascript, this website was born to share knowledge and help anyone that's been this unexpected journey to become a web developer.</p>
        <p>Good luck, and Live long and prosper!</p>
        <p>Like my favorite writer say:</p>
        <p><strong>“Where there's life there's hope, and need of vittles.”</strong> ― J.R.R. Tolkien, The Lord of the Rings </p>
      </S.MainContent>
  </LayoutHero>
)

export default indexPage
