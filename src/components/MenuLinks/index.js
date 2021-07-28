import React from "react"
import links from "./content"
import PropTypes from "prop-types"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuLinks = ({ className, ...props }) => (
  <S.MenuLinksWrapper className={className} {...props}>
    <S.MenuLinksList>
      {links.map((link, i) => (
        <S.MenuLinksItem key={i}>
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
}

MenuLinks.defaultProps = {
  className: '',
}

export default MenuLinks
