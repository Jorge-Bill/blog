import styled, { css } from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  ${({ variant }) => css`
    align-items: center;
    background: var(--mediumBackground);
    border-left: 1px solid var(--borders);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;
    width: 3.75rem;
    transition: background 0.5s;

    ${media.lessThan("large")`
      border-top: 1px solid var(--borders);
      bottom: 0;
      flex-direction: row;
      height: auto;
      width: 100vw;
    `};

    ${variant === "bottom" &&
    `
      width: 100vw;
      height: 3.75rem;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      bottom: 0;
    `};
  `}
`

export const MenuBarGroup = styled.div`
  ${({ variant }) => css`
    display: flex;
    flex-direction: column;

    ${media.lessThan("large")`
      flex-direction: row;
    `}

    ${variant === "bottom" &&
    `
      flex-direction: row;
    `};
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &.light {
    color: var(--highlight);

    &:hover {
      color: var(--texts);
    }
  }

  &:hover {
    color: var(--highlight);
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
