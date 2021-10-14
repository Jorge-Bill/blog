import React from "react"

import Board from "react-trello"

import PropTypes from "prop-types"

import * as S from "./styled"

const KanbanBoard = ({
  data,
  editable,
  canAddLanes,
  editLaneTitle,
  ...props
}) => {
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

KanbanBoard.propTypes = {
  data: PropTypes.object,
  editable: PropTypes.bool.isRequired,
  canAddLanes: PropTypes.bool,
  editLaneTitle: PropTypes.bool,
}

KanbanBoard.defaultProps = {
  data: {
    lanes: [],
    canAddLanes: false,
    editLaneTitle: false,
  },
}

export default KanbanBoard
