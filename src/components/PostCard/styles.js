import styled from 'styled-components'
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostCardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.lessThan("large")`
    flex-direction: column;
    padding: 1rem;
  `}
`

export const PostCardItem = styled(AniLink)`
  flex: 0 1 calc(33% - .2em);
  max-width: 33%;
  border: 1px solid var(--mediumBackground);
  box-shadow: 0 1px 10px rgb(29 34 47 / 10%);
  border-radius: 4px;
  transition: 0.3s;
  white-space: normal;
  text-align: left;
  background: var(--mediumBackground);
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    opacity: 0.6;
    border: 1px solid var(--highlight);
    background-color: var(--background);
  }

  ${media.lessThan("large")`
    padding-top: 0;
    max-width: 100%;

    &:last-child{
      margin: 0;
    }
  `}
`

export const PostCardImage = styled.img`
  object-fit: cover;
  margin: auto;
  width: 100%;
  height: 8em;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid var(--mediumBackground);
`

export const PostCardContent = styled.div`
  padding: 1rem;
  p{
    margin: 0;
  }
`

export const PostCardTitle = styled.h6`
  color: var(--postColor);
  text-shadow: rgb(0 0 0 / 1%) 0 0 1px;
  font-smoothing: antialiased;
  font-weight: 700;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  height: 70px;
`

export const PostCardDesc = styled.p`
  font-size: .85rem;
  font-weight: 400;
  line-height: 1.2rem;
  text-transform: capitalize;
  height: 60px;
  color: var(--texts);
  margin: 0;
`

export const PostCardInfo = styled.div`
  p {
    font-size: .75rem;
    text-align: center;
    color: var(--postColor);
    margin: 1rem;
  }
`
