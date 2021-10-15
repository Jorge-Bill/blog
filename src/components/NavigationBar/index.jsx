import React from 'react'

import PropTypes from 'prop-types'
import { Profile, SocialLinks, MenuLinks } from '@components'

import * as S from './styled'

const NavigationBar = ({
  variant,
  profileSize,
  profileAvatar,
  profileDescription,
  menuLinksDisplay,
  firstMenu,
  socialSize,
  ...props
}) => (
  <S.NavigationBarWrapper variant={variant} {...props}>
    <Profile size={profileSize} showAvatar={profileAvatar} showDescription={profileDescription} />
    {firstMenu ? (
      <>
        <MenuLinks variant={menuLinksDisplay} />
        <SocialLinks size={socialSize} />
      </>
    ) : (
      <>
        <SocialLinks size={socialSize} />
        <MenuLinks variant={menuLinksDisplay} />
      </>
    )}
  </S.NavigationBarWrapper>
)

NavigationBar.propTypes = {
  variant: PropTypes.oneOf(['navbar', 'sidebar']),
  profileAvatar: PropTypes.bool,
  profileDescription: PropTypes.bool,
  menuLinksDisplay: PropTypes.oneOf(['inline', 'column']),
  firstMenu: PropTypes.bool,
  profileSize: PropTypes.oneOf(['small', 'auto']),
  socialSize: PropTypes.oneOf(['small', 'auto'])
}

NavigationBar.defaultProps = {
  variant: 'sidebar',
  profileAvatar: false,
  profileDescription: true,
  menuLinksDisplay: 'column',
  firstMenu: false,
  profileSize: 'auto',
  socialSize: 'auto'
}

export default NavigationBar
