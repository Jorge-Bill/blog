import React from 'react'
import PropTypes from 'prop-types'

import PostItem from '../PostItem'

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    background={hit.background}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
    timeToRead={hit.timeToRead}
  />
)

Hit.propTypes = {
  hit: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default Hit
