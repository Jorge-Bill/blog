import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const NavigationBarWrapper = styled.aside`
  ${({ variant }) => css`
    display: flex;
    background: var(--mediumBackground);
    position: fixed;
    text-align: center;

    ${variant === 'sidebar' &&
    `
    height: 100vh;
    width: 20rem;
    flex-direction: column;
    padding: 2rem;
    border-right: 1px solid var(--borders);
  `};

    ${variant === 'navbar' &&
    `
    width: 100vw;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid var(--borders);
    justify-content: space-between;
  `};

    ${media.lessThan('large')`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid var(--borders);
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
  `}
`
