import React from "react"

import propTypes from "prop-types"
import Icons from '../SocialLinks/Icons';
import { Github } from '@styled-icons/boxicons-logos/Github'

import * as S from "./styled"

const Timeline = ({ data }) => (
  <S.TimelineWrapper className="vertical-timeline.vertical-timeline-custom-line">
      {data.map((item, i) => {
        const Icon = Icons[item.icon]
        return (
          <S.TimelineElement key={i}
            className={`vertical-timeline-element--${item.icon.toLowerCase()}`}
            contentStyle={{ background: 'var(--timelineColor)', color: 'var(--borders)' }}
            contentArrowStyle={{ borderRight: '8px solid var(--borders)' }}
            date={item.period}
            iconStyle={{ background: "var(--timelineColor)", color: 'var(--borders)' }}
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
        iconStyle={{ background: 'var(--timelineColor)', color: 'var(--borders)' }}
        icon={<Github />}
      />
  </S.TimelineWrapper>
)

Timeline.propTypes = {
  data: propTypes.array.isRequired
}

export default Timeline
