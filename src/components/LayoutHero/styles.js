import styled from 'styled-components'
import media from "styled-media-query"

export const LayoutHeroWrapper = styled.section`
  display: flex;
  flex-direction: column;

  .img-banner {
    margin-top: 8.310249307479225vh;
    opacity: 0.8;

    ${media.lessThan("large")`
      margin-top: 16.897506925207757vh;
    `}
  }
`
export const LayoutHeroMain = styled.main`
  background: var(--background);
  transition: background, color 0.5s;
  min-height: 100vh;
`
