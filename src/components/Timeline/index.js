import React from "react"
import Icons from '../SocialLinks/Icons';
import { Github } from '@styled-icons/boxicons-logos/Github'

import propTypes from "prop-types"

import * as S from "./styled"

const Timeline = ({ data }) => (
  <S.TimelineWrapper className="vertical-timeline.vertical-timeline-custom-line">
      {data.map((item, i) => {
        const Icon = Icons[item.icon]
        return (
          <S.TimelineElement key={i}
            className={`vertical-timeline-element--${item.icon.toLowerCase()}`}
            contentStyle={{ background: '#07b0b8', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date={item.date}
            iconStyle={{ background: "#07b0b8", color: '#fff' }}
            icon={<Icon />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.date}</h4>
            <p>
             {item.description}
            </p>
          </S.TimelineElement>
          )
      })}
       <S.TimelineElement
        iconStyle={{ background: '#07b0b8', color: '#fff' }}
        icon={<Github />}
      />
  </S.TimelineWrapper>
)

Timeline.propTypes = {
  data: propTypes.array.isRequired
}

export default Timeline
