import styled from 'styled-components'
import media from 'styled-media-query'

export const BannerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--borders);
  background-color: var(--timelineColor);
  box-shadow: 0 4px 8px 0 var(--background);
  min-height: 100vh;
  transition: 0.15s;

  ${media.lessThan('large')`
    display: none;
  `}
`

export const ImageBanner = styled.img`
  background-image: linear-gradient(to right, var(--timelineColor) 0%, var(--mediumBackground) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.8;
`

export const BannerTitle = styled.h1`
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;

  text-align: center;
  color: var(--postColor);
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-shadow: 6px 6px 0px var(--timelineColor);

  ${media.lessThan('large')`
    font-size: 2.5rem;
  `}
`
