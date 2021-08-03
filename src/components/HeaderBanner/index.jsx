import React from 'react'

import PropTypes from 'prop-types'
import LazyLoad from "react-lazyload"

import * as S from './styles'

const HeaderBanner = ({ title, tags, ...props }) => {
  const refLoader = React.useRef();
  const removeLoader = () => {
    refLoader.current.remove();
  };

  return (
    <S.BannerWrapper {...props}>
      <LazyLoad>
        <S.BannerTitle>{title}</S.BannerTitle>
        <S.Loader ref={refLoader} />
        <S.ImageBanner
          src={`https://source.unsplash.com/1600x900/?desktop,${tags}`}
          alt={tags}
          onLoad={removeLoader}
          onError={removeLoader} />
      </LazyLoad>
    </S.BannerWrapper>
  )
}

HeaderBanner.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.string
}

HeaderBanner.defaultProps = {
  title: '',
  tags: 'nature,star,galaxy,space'
}

export default React.memo(HeaderBanner)
