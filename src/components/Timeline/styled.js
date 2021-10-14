import styled from "styled-components"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

export const TimelineWrapper = styled(VerticalTimeline)`
  ::before {
    background: var(--timelineLine);
  }

  .vertical-timeline-element-date {
    color: var(--timelineDate);
  }
`
export const TimelineElement = styled(VerticalTimelineElement)`
  h3,
  h4,
  p {
    color: var(--postColor);
  }
`
