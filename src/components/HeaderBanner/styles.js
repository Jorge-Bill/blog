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
  opacity: 0.8;

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
`

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  transform: translateZ(0);
  animation: ${loadingAnimation} 1.1s infinite linear;


  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;

  &:after {
    border-radius: 50%;
    width: 50em;
    height: 50em;
  }
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
