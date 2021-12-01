import React from 'react'

import PropTypes from 'prop-types'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { random } from '@utils/random'
import Icons from '../SocialLinks/Icons'

import * as S from './styled'

const Timeline = ({ data }) => (
  <S.TimelineWrapper className="vertical-timeline.vertical-timeline-custom-line">
    {data.map(item => {
      const Icon = Icons[item.icon]
      return (
        <S.TimelineElement
          key={random()}
          className={`vertical-timeline-element--${item.icon.toLowerCase()}`}
          contentStyle={{
            background: 'var(--timelineColor)',
            color: 'var(--borders)'
          }}
          contentArrowStyle={{ borderRight: '8px solid var(--borders)' }}
          date={item.period}
          iconStyle={{
            background: 'var(--timelineColor)',
            color: 'var(--borders)'
          }}
          icon={<Icon />}
        >
          <h3 className="vertical-timeline-element-title">{item.institution}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
          <p>{item.description}</p>
          <p>{item.location}</p>
        </S.TimelineElement>
      )
    })}
    <S.TimelineElement
      iconStyle={{
        background: 'var(--timelineColor)',
        color: 'var(--borders)'
      }}
      icon={<Github />}
    />
  </S.TimelineWrapper>
)

Timeline.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
}

export default Timeline
