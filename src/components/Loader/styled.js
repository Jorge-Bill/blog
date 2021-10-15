import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    transition: opacity 0.5s;
  }
  100% {
    transform: rotate(360deg);
    transition: opacity 0.8s;
  }
`

export const Loader = styled.div`
  margin: auto;
  position: absolute;
  top: 35vh;
  left: 0;
  right: 0;
  z-index: 1;

  width: 20rem;
  height: 20rem;
  border-radius: 50%;

  animation: ${loadingAnimation} .5s linear infinite;
  border: 1em solid var(--postColor);
  border-image-source: linear-gradient(to left,(--postColor), var(--borders));
  border-top: 1em solid var(--highlight);
  box-shadow: 0 4px 8px 0 var(--highlight);
  opacity 0.7;
`
