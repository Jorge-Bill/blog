import React from "react"

import getThemeColor from "@utils/getThemeColor"
import links from "./content"
import PropTypes from "prop-types"

import * as S from "./styled"

const MenuLinks = ({ className, variant, ...props }) => (
  <S.MenuLinksWrapper className={className} variant={variant} {...props}>
    <S.MenuLinksList variant={variant}>
      {links.map((link, i) => (
        <S.MenuLinksItem key={i} variant={variant}>
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
  variant: PropTypes.oneOf(["inline", "column"]),
}

MenuLinks.defaultProps = {
  className: "",
  variant: "column",
}

export default MenuLinks
