import styled, { css } from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${({ variant }) => css`
    ${variant === "inline" &&
    `
    display: flex;
  `};

    ${media.lessThan("large")`
    display: none;
  `};
  `}
`

export const MenuLinksList = styled.ul`
  ${({ variant }) => css`
    font-size: 1.2rem;
    font-weight: 300;

    ${variant === "inline" &&
    `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `};
  `}
`

export const MenuLinksItem = styled.li`
  ${({ variant }) => css`
    padding: 0.5rem 0;
    .active {
      color: var(--highlight);
    }

    ${variant === "inline" &&
    `
    padding: 0 0.3rem;

    &:first-child{
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  `};
  `}
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`
