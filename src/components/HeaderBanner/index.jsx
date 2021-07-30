import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const HeaderBanner = ({ title, ...props }) => (
  <S.BannerWrapper {...props}>
    <S.BannerTitle>{title}</S.BannerTitle>
  </S.BannerWrapper>
)

HeaderBanner.propTypes = {
  title: PropTypes.string
}

HeaderBanner.defaultProps = {
  title: ''
}

export default HeaderBanner
