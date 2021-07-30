import styled from 'styled-components'
import media from "styled-media-query"

export const LayoutHeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const LayoutHeroMain = styled.main`
  background: var(--background);
  transition: background, color 0.5s;
  min-height: 100vh;
  padding: 2rem 0 5rem 0;

  ${media.lessThan("large")`
    padding: 7rem 0 5rem 0;
  `}
`
