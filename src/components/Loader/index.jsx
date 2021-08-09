import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const Loader = ({ stopOutside, ...props }) => {
  const refLoader = React.useRef()

  function removeLoader() {
    refLoader.current.remove()
  }

  useEffect(() => {
    if(!stopOutside) {
      removeLoader()
    }
  })

  return (
    <S.Loader {...props} ref={refLoader} />
  )
}

Loader.propTypes = {
  stopOutside: PropTypes.bool.isRequired,
}

export default React.memo(Loader)
