import React from 'react'

import propTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from '@utils/getThemeColor'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink cover direction="left" title="Previous page" bg={getThemeColor()} duration={0.6} to={prevPage}>
        ← Previous Page
      </AniLink>
    )}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast && (
      <AniLink cover title="next page" direction="right" bg={getThemeColor()} duration={0.6} to={nextPage}>
        Next Page →
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
}

Pagination.defaultProps = {
  prevPage: '',
  nextPage: ''
}

export default Pagination
