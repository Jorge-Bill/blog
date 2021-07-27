import React from 'react'

import PropTypes from 'prop-types'
import { HeaderMenu, MenuBar } from '../index'
import { StaticImage } from "gatsby-plugin-image"

import * as S from './styles'
import GlobalStyles from "../../styles/global"

const LayoutHero = ({ children }) => (
  <S.LayoutHeroWrapper>
    <GlobalStyles />
    <HeaderMenu />
    <StaticImage
      src='../../images/jorge_banner.png'
      alt='banner image'
      placeholder='blurred'
    />
    <S.LayoutHeroMain>{children}</S.LayoutHeroMain>
    <S.LayoutHeroMenuBar>
      <MenuBar />
    </S.LayoutHeroMenuBar>
  </S.LayoutHeroWrapper>
)

LayoutHero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHero
