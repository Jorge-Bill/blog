import React from 'react'

import PropTypes from 'prop-types'
import { NavigationBar, HeaderBanner, MenuBar } from '../index'
import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from './styles'
import GlobalStyles from "../../styles/global"

const LayoutHero = ({ title, bannerTags, children, ...props }) => (
  <S.LayoutHeroWrapper {...props}>
    <GlobalStyles />
    <TransitionPortal level="top">
      <NavigationBar
        variant='navbar'
        profileSize='small'
        profileAvatar={false}
        profileDescription={false}
        menuLinksDisplay='inline'
        firstMenu={true}
        socialSize='small'
      />
    </TransitionPortal>
    <HeaderBanner title={title} tags={bannerTags} />
    <S.LayoutHeroMain>{children}</S.LayoutHeroMain>
    <TransitionPortal level="top">
      <MenuBar variant='bottom' size='small' />
    </TransitionPortal>
  </S.LayoutHeroWrapper>
)

LayoutHero.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  bannerTags: PropTypes.string,
}

LayoutHero.defaultProps = {
  title: 'Jorge Mendes',
  bannerTags: '',
}

export default LayoutHero
