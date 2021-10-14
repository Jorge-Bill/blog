import styled from "styled-components"
import media from "styled-media-query"

import { StarFill } from "@styled-icons/bootstrap/StarFill"

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SkillTitle = styled.h6`
  text-transform: Capitalize;
  color: var(--postColor);
  font-weight: 400;
  letter-spacing: 0.2em;
  text-shadow: 2px 2px 0px var(--timelineColor);
  font-size: 1.5rem;
  margin-bottom: 1rem;

  ${media.lessThan("large")`
    margin-top: 2rem;
  `};
`

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;

  ${media.lessThan("large")`
    width: 100%;
    justify-content: space-around;
  `};
`

export const SkillName = styled.p`
  min-width: 150px;
  font-weight: bold;
  color: var(--postColor);
  text-transform: uppercase;
  font-size: 1rem;
  margin-right: 1rem;
`

export const SkillLevel = styled.p`
  min-width: 100px;
  color: var(--highlight);

  &:hover {
    color: yellow;
  }
`

export const SkillStar = styled(StarFill)`
  width: 1rem;
  margin-right: .3rem;¨
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`
