import React, { useState } from 'react'

import PropTypes from 'prop-types'
import LazyLoad from "react-lazyload"

import { Loader } from '@components'

import * as S from './styled'

const HeaderBanner = ({ title, tags, ...props }) => {
  const [loader, setLoader] = useState(true)
  const handleLoader = () => setLoader(!loader)

  return (
    <S.BannerWrapper {...props}>
      <LazyLoad>
        <S.BannerTitle>{title}</S.BannerTitle>
        <Loader stopOutside={loader} />
        <S.ImageBanner
          src={`https://source.unsplash.com/1600x900/?desktop,${tags}`}
          alt={`Random desktop wallpapers about the tags: ${tags}`}
          onLoad={handleLoader}
          onError={handleLoader} />
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
