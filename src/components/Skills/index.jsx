import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Skills = ({ title, data, ...props }) => {
  const stars = level => [...Array(level)].map((level, i) => <S.SkillStar key={i} />)

  return (
    <S.SkillsWrapper {...props}>
      <S.SkillTitle>{title}</S.SkillTitle>
      {data.map((skill, i) => {
        return (
          <S.SkillsContainer key={i}>
            <S.SkillName>{skill.name}</S.SkillName>
            <S.SkillLevel>{stars(skill.level)}</S.SkillLevel>
          </S.SkillsContainer>
        )
      })}
    </S.SkillsWrapper>
  )
}

Skills.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
}

Skills.defaultProps = {
  title: '',
}

export default Skills
