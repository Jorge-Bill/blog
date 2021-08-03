import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const HeaderBanner = ({ title, tags, ...props }) => (
  <S.BannerWrapper {...props} tags={tags}>
    <S.BannerTitle>{title}</S.BannerTitle>
  </S.BannerWrapper>
)

HeaderBanner.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.string
}

HeaderBanner.defaultProps = {
  title: '',
  tags: 'nature,star,galaxy,space'
}

export default HeaderBanner
