import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Skills = ({ title, data, ...props }) => {
  const random = () => Math.random().toString(36).slice(2)
  const stars = level => [...Array(level)].map(() => <S.SkillStar key={random()} />)

  return (
    <S.SkillsWrapper {...props}>
      <S.SkillTitle>{title}</S.SkillTitle>
      {data.map((skill) => (
        <S.SkillsContainer key={skill.id}>
          <S.SkillName>{skill.name}</S.SkillName>
          <S.SkillLevel>{stars(skill.level, skill.id)}</S.SkillLevel>
        </S.SkillsContainer>
      ))}
    </S.SkillsWrapper>
  )
}

Skills.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.string
}

Skills.defaultProps = {
  title: ''
}

export default Skills
