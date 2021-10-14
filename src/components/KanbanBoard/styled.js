import styled from 'styled-components'

export const Wrapper = styled.div`
  .react-trello-board{
    background-image: url('https://jorgemendes.com.br/static/37c462c46e4a5cb93631ec225343cb6c/416c3/icon.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto;


    background-color: var(--mediumBackground);
    border: 1px solid var(--borders);
    border-radius: 4px;
  }

  .react-trello-lane {
    background-color: var(--background);
    color: var(--highlight);
    box-shadow: 0 1px 10px rgb(29 34 47 / 10%);
  }

  .react-trello-card {
    border: 1px solid var(--mediumBackground);
  }
`
