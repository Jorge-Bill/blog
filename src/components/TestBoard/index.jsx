import React from "react"

import Board from 'react-trello'

import PropTypes from 'prop-types'

import * as S from './styled'

const TestBoard = ({ data, editable, canAddLanes, editLaneTitle, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <Board
        data={data}
        editable={editable}
        canAddLanes={canAddLanes}
        editLaneTitle={editLaneTitle}
      />
    </S.Wrapper>
  )
}

TestBoard.propTypes = {
  data: PropTypes.object,
  editable: PropTypes.bool.isRequired,
  canAddLanes: PropTypes.bool,
  editLaneTitle: PropTypes.bool,
}

TestBoard.defaultProps = {
  data: {
    lanes: [],
    canAddLanes: false,
    editLaneTitle: false,
  }
}

export default TestBoard
