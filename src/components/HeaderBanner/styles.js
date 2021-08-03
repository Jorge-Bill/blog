import styled from 'styled-components'
import media from "styled-media-query"

export const BannerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--timelineColor);
  box-shadow: 0 4px 8px 0 var(--background);
  min-height: 100vh;
  transition: .15s;
  opacity: 0.8;

  ${media.greaterThan("medium")`
    background: url(https://source.unsplash.com/1600x900/?desktop,${props => props.tags});
  `}

  ${media.greaterThan("huge")`
    background: url(https://source.unsplash.com/3823x2510/?desktop,${props => props.tags});
  `}

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const BannerTitle = styled.h1`
  color:  var(--postColor);
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 700;
  letter-spacing: .2rem;
  text-shadow: 6px 6px 0px var(--timelineColor);

  ${media.lessThan("large")`
    font-size: 2.5rem;
  `}
`
