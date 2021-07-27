import styled from 'styled-components'
import media from "styled-media-query"

export const HeaderWrapper = styled.div`
  width: 100vw;
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

export const HeaderMenuLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

 ul {
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    padding: 0 0.5rem;
  }
 }
`

export const HeaderSocial = styled.div`
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    margin: 0;
  }

  ${media.lessThan("large")`
    width: 100vw;
    margin: 0.8rem 0 0.8rem 0;
  `}
`
