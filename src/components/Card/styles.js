import styled from 'styled-components'
import media from "styled-media-query"

export const CardWrapper = styled.div`
  border 1px solid var(--borders);
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 var(--background);
  transition: 0.3s;
  width: 40%;

  ${media.lessThan("large")`
    padding-top: 3rem;
  `}

  :hover {
    box-shadow: 0 4px 4px 0 var(--highlight);
  }
`

export const CardIcon = styled.svg`
  width: 50px;
`

export const CardTitle = styled.h4`
  color: var(--highlight);
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const CardDescription = styled.p`
  color: var(--texts);
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`
