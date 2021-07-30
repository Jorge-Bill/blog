import styled from 'styled-components'
import media from "styled-media-query"
import SocialLinks from '../SocialLinks'

export const HeaderWrapper = styled.header`
  width: 100vw;
  padding: 0.8rem 0;
  display: flex;
  justify-content: space-between;
  background-color: var(--mediumBackground);

  ${media.lessThan("large")`
    display: block;
    padding: 1rem 1rem;
  `}
`

export const HeaderProfile = styled.div`
  width: 12vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: var(--texts);

  h1 {
    text-transform: uppercase;
    margin-bottom: 0.2rem;
  }

  ${media.lessThan("large")`
    width: 100vw;
    display: block;
    text-align: center;
  `}
`

export const HeaderSocial = styled(SocialLinks)`
  width: 20vw;
  margin: 0 1rem;

  ${media.lessThan("large")`
    width: 90vw;
    margin: 0.8rem 0 0.8rem 0;
  `}
`
