import styled, { css } from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
${({ size }) => css`
  width: 100%;
  margin: 2rem auto;

  ${size === 'small' && `
    width: 20vw;
    margin: 0 1rem;
  `};

  ${media.lessThan("large")`
    margin: 0.8rem auto;
    width: 100%;
  `}

 `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
