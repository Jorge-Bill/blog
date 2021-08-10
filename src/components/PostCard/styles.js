import styled from 'styled-components'
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostCardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${media.lessThan("large")`
    flex-direction: column;
    padding: .8rem;
  `}
`

export const PostCardItem = styled(AniLink)`
  border: 1px solid var(--mediumBackground);
  box-shadow: 0 1px 10px rgb(29 34 47 / 10%);
  background: var(--mediumBackground);
  text-decoration: none;
  white-space: normal;
  border-radius: 4px;
  margin-top: 1rem;
  transition: 0.3s;
  text-align: left;
  cursor: pointer;
  max-width: 33%;

  &:hover {
    opacity: 0.6;
    border: 1px solid var(--highlight);
    background-color: var(--background);
  }

  ${media.lessThan("large")`
    max-width: 100%;
    margin-top: 0;
    margin-bottom: .8rem;

    &:last-child{
      margin-bottom: 0;
    }
  `}

  ${media.greaterThan("huge")`
    width: 300px;
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
  background-image: linear-gradient(-20deg, ${props =>
    props.background} 0%, var(--highlight) 100%);
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
