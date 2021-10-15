import React from 'react'

import { random } from '@utils/random'
import getThemeColor from '@utils/getThemeColor'
import PropTypes from 'prop-types'
import links from './content'

import * as S from './styled'

const MenuLinks = ({ className, variant, ...props }) => (
  <S.MenuLinksWrapper className={className} variant={variant} {...props}>
    <S.MenuLinksList variant={variant}>
      {links.map((link) => (
        <S.MenuLinksItem key={random()} variant={variant}>
          <S.MenuLinksLink
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

MenuLinks.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['inline', 'column'])
}

MenuLinks.defaultProps = {
  className: '',
  variant: 'column'
}

export default MenuLinks
