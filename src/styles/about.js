import styled from 'styled-components'
import media from "styled-media-query"
import Card from '../components/Card'
import PostItem from '../components/PostItem'


export const AboutHeader = styled.header`
  text-align: center;
  margin: auto;
  max-width: 70rem;
  // padding: 5rem 5rem 0;
  letter-spacing: .2rem;

  ${media.lessThan("large")`
    // padding: 5rem 0 0;
    max-width: 100%;
  `}
`

export const AboutTitle = styled.h1`
  color: var(--highlight);
  text-transform: uppercase;

  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const AboutDescription = styled.h2`
  font-size: 2rem;
  color: var(--postColor);
  font-weight: 100;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const AboutHighlight = styled.h6`
  text-align: center;
  font-size: 1.8rem;
  color: var(--highlight);
  font-weight: 400;
  padding: 0 1.4rem;
  margin: 1rem 0 1rem 0;

  ${media.lessThan("large")`
    font-size: 1.3rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const imgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .img-about {
    border-radius: 5%;
    border: 1px solid;
    box-shadow: 5px 10px var(--highlight);
    margin-bottom: 2rem;
  }
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    // padding: 0 1.4rem;

    ${media.lessThan("large")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;

    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;

    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;

    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan("large")`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--postColor);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const CustomCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 16rem;

  svg {
    color: var(--postColor);
    width: 3rem;
  }

  a {
    margin: 0;
    text-decoration: none;
    color: var(--postColor);
    border-bottom: 0;
    min-width: 11rem;
  }

  &:hover {
    background-color: var(--highlight);
  }

  &:nth-child(1){
    margin: 0 1rem 0 0;
   }

  ${media.lessThan("large")`
  width: 80%;
    &:nth-child(1){
      margin: 0 0 1rem 0;
    }
`}
`

export const CustomPostItem = styled(PostItem)`
  &:last-child{
    border-bottom: 0;
  }

  h1 {
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin: 0;
  }

  time {
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  ${media.lessThan("large")`
    h1, p {
      padding: 0;
    }

    p {
      margin-top: 0.3rem;
      text-transform: Capitalize;
    }
  `}
`

export const LastsPostsWrapper = styled.section`
  a {
    &:last-child{
      border-bottom: 0;
      border-right: 0;
     }
  }
`