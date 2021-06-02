import styled from "styled-components"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const TimelineWrapper = styled(VerticalTimeline)`
  ::before {
    background: var(--black);
  }

  .vertical-timeline-element-date {
    color: var(--texts);
  }
`
export const TimelineElement = styled(VerticalTimelineElement)`
`