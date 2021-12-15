import React from 'react'

import PropTypes from 'prop-types'
import { NavigationBar, HeaderBanner, MenuBar } from '@components'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import GlobalStyles from '@styles/global'
import * as S from './styled'

const LayoutHero = ({ title, bannerTags, noBanner, children, ...props }) => (
  <S.LayoutHeroWrapper {...props}>
    <GlobalStyles />
    <TransitionPortal level="top">
      <NavigationBar
        variant="navbar"
        profileSize="small"
        profileAvatar={false}
        profileDescription={false}
        menuLinksDisplay="inline"
        firstMenu
        socialSize="small"
      />
    </TransitionPortal>
    {!noBanner && <HeaderBanner title={title} tags={bannerTags} />}
    <S.LayoutHeroMain>{children}</S.LayoutHeroMain>
    <TransitionPortal level="top">
      <MenuBar variant="bottom" size="small" />
    </TransitionPortal>
  </S.LayoutHeroWrapper>
)

LayoutHero.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  bannerTags: PropTypes.string,
  noBanner: PropTypes.bool
}

LayoutHero.defaultProps = {
  title: 'Jorge Mendes',
  bannerTags: '',
  noBanner: false
}

export default LayoutHero
