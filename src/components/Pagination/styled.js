import styled from "styled-components"
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  align-items: center;
  color: var(--texts);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}

  a {
    transition: 0.3s;
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;
    text-transform: uppercase;

    &:hover {
      color: var(--highlight);
      font-weight: 500;
    }
  }
`
