import React from "react"
import Icons from "./Icons"
import links from "./content"
import PropTypes from "prop-types"

import * as S from "./styled"

const SocialLinks = ({ className, ...props }) => (
  <S.SocialLinksWrapper className={className} {...props}>
    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

SocialLinks.propTypes = {
  className: PropTypes.string,
}

SocialLinks.defaultProps = {
  className: '',
}

export default SocialLinks
