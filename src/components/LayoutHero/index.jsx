import React from 'react'

import PropTypes from 'prop-types'
import { HeaderMenu, HeaderBanner, MenuBar } from '../index'
import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from './styles'
import GlobalStyles from "../../styles/global"

const LayoutHero = ({ children }) => (
  <S.LayoutHeroWrapper>
    <GlobalStyles />
    <TransitionPortal level="top">
      <HeaderMenu />
    </TransitionPortal>
    <HeaderBanner title='Jorge Mendes' />
    <S.LayoutHeroMain>{children}</S.LayoutHeroMain>
    <TransitionPortal level="top">
      <MenuBar variant='bottom' />
    </TransitionPortal>
  </S.LayoutHeroWrapper>
)

LayoutHero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHero
