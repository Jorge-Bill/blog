import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const ImageWrapper = ({ image, alt, ...props }) => (
  <S.Thumb src={image} alt={alt} {...props} />
)

ImageWrapper.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

ImageWrapper.defaultProps = {
  alt: 'ImageWrapper'
}

export default ImageWrapper
