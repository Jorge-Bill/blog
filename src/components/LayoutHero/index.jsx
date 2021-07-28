import React from 'react'

import PropTypes from 'prop-types'
import { HeaderMenu, MenuBar } from '../index'
import { StaticImage } from "gatsby-plugin-image"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from './styles'
import GlobalStyles from "../../styles/global"

const LayoutHero = ({ children }) => (
  <S.LayoutHeroWrapper>
    <GlobalStyles />
    <TransitionPortal level="top">
      <HeaderMenu />
    </TransitionPortal>
    <StaticImage
      src='../../images/jorge_banner.png'
      alt='banner image'
      placeholder='blurred'
    />
    <S.LayoutHeroMain>{children}</S.LayoutHeroMain>
    <TransitionPortal level="top">
      <MenuBar position='bottom' />
    </TransitionPortal>
  </S.LayoutHeroWrapper>
)

LayoutHero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHero
