import styled from 'styled-components'

export const LayoutHeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export const LayoutHeroMain = styled.main`
  background: var(--background);
  transition: background, color 0.5s;
  min-height: 100vh;
  width: 100%;
`

export const LayoutHeroMenuBar = styled.footer`
  aside {
    width: 100vw;
    height: 3.75rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    bottom: 0;

    div {
      flex-direction: row;
    }
  }
`
