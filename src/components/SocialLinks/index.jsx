import React from 'react'

import PropTypes from 'prop-types'
import Icons from './Icons'
import links from './content'

import * as S from './styled'

const SocialLinks = ({ className, size, ...props }) => (
  <S.SocialLinksWrapper className={className} size={size} {...props}>
    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
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
  size: PropTypes.oneOf(['small', 'auto'])
}

SocialLinks.defaultProps = {
  className: '',
  size: 'auto'
}

export default SocialLinks
