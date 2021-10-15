import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const ProfileWrapper = styled.section`
  ${({ size }) => css`
    color: var(--texts);
    display: flex;
    flex-direction: column;

    ${size === 'small' &&
    `
    width: 20vw;
  `};

    ${media.lessThan('large')`
    display: flex;
    text-align: left;
    width: auto;
  `}
  `}
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  text-align: center;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0.5rem auto 0.5rem;

  ${media.lessThan('large')`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: capitalize;

  ${media.lessThan('large')`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan('large')`
    display: none;
  `}
`
