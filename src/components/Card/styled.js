import styled from "styled-components"
import media from "styled-media-query"

export const CardWrapper = styled.div`
  border 1px solid var(--borders);
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 var(--background);
  transition: 0.3s;

  ${media.lessThan("large")`
    padding-top: 3rem;
  `}

  :hover {
    box-shadow: 0 4px 4px 0 var(--highlight);
  }
`
