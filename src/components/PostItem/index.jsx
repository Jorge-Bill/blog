import React from 'react'

import PropTypes from 'prop-types'
import getThemeColor from '@utils/getThemeColor'

import * as S from './styled'

const PostItem = ({ slug, background, category, date, timeToRead, title, description, ...props }) => (
  <S.PostItemLink to={slug} title="go to post" cover direction="right" bg={getThemeColor()} duration={0.6}>
    <S.PostItemWrapper {...props}>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} - {timeToRead} min of read
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

PostItem.defaultProps = {
  background: ''
}

export default PostItem
