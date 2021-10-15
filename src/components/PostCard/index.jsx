import React from 'react'

import PropTypes from 'prop-types'
import getThemeColor from '@utils/getThemeColor'

import * as S from './styled'

const PostCard = ({ data, ...props }) => (
  <S.PostCardWrapper {...props}>
    {data.map(
      ({
        node: {
          frontmatter: { category, thumbnail, date, description, title, background },
          timeToRead,
          id,
          fields: { slug }
        }
      }) => (
        <S.PostCardItem key={id} to={slug} title={title} cover direction="right" bg={getThemeColor()} duration={0.6}>
          <S.PostCardImage src={`/${thumbnail}`} alt={title} background={background} />
          <S.PostCardContent>
            <S.PostCardTitle>{title}</S.PostCardTitle>
            <S.PostCardDesc>{description}</S.PostCardDesc>
          </S.PostCardContent>
          <S.PostCardInfo>
            <p>
              {category} - {date} - {timeToRead} min of read
            </p>
          </S.PostCardInfo>
        </S.PostCardItem>
      )
    )}
  </S.PostCardWrapper>
)

PostCard.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
}

export default PostCard
