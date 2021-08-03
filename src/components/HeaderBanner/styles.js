import styled, { keyframes } from 'styled-components'
import media from "styled-media-query"

export const BannerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--timelineColor);
  box-shadow: 0 4px 8px 0 var(--background);
  min-height: 100vh;
  transition: .15s;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const ImageBanner = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.8;
`

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  margin: auto;
  position: absolute;
  top: 35vh;
  left: 0;
  right: 0;
  z-index: 1;
  width: 20rem;
  height: 20rem;

  animation: ${loadingAnimation} 1s linear infinite;
  border: 1em solid var(--postColor);
  border-top: 1em solid var(--background);
  border-radius: 50%;
`;

export const BannerTitle = styled.h1`
  position: absolute;
  z-index: 999;
  left:0;
  right:0;

  text-align: center;
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
