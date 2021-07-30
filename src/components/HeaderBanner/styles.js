import styled from 'styled-components'
import media from "styled-media-query"

export const BannerWrapper = styled.section`
  background: url("https://source.unsplash.com/weekly?nature");
  background-color: var(--timelineColor);
  min-height: 80vh;
  box-shadow: 0 4px 8px 0 var(--background);

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("large")`
    // min-height: 25vh;
    display: none;
  `}
`
export const BannerTitle = styled.h1`
  color:  var(--postColor);
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: .2rem;
  text-shadow: 6px 6px 0px var(--timelineColor);

  ${media.lessThan("large")`
    font-size: 2.5rem;
  `}
`
