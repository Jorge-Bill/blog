import styled from 'styled-components'
import media from "styled-media-query"
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

export const HeaderWrapper = styled.div`
  width: 100vw;
  padding: 0.8rem 0;
  display: flex;
  justify-content: space-between;
  color: var(--highlight);
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

  ${media.lessThan("large")`
    width: 100vw;
    display: block;
  `}
`
export const HeaderDesc = styled.div`
  flex-direction: column;
  h1 {
    text-transform: uppercase;
  }

  ${media.lessThan("large")`
    text-align: center;
  `}
`

export const HeaderMenuLinks = styled(MenuLinks)`
  text-transform: uppercase;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
      padding: 0 0.3rem;
    }

    li:first-child{
      padding-left: 0;
    }

    li:last-child {
      padding-right: 0;
    }
  }
`

export const HeaderSocial = styled(SocialLinks)`
  width: 20vw;
  margin: 0 1rem;

  ${media.lessThan("large")`
    width: 90vw;
    margin: 0.8rem 0 0.8rem 0;
  `}
`
