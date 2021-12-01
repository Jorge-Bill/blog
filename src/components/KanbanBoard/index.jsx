import React from 'react'

import Board from 'react-trello'

import PropTypes from 'prop-types'

import Wrapper from './styled'

const KanbanBoard = ({ data, editable, canAddLanes, editLaneTitle, ...props }) => (
  <Wrapper {...props}>
    <Board data={data} editable={editable} canAddLanes={canAddLanes} editLaneTitle={editLaneTitle} />
  </Wrapper>
)

KanbanBoard.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  editable: PropTypes.bool.isRequired,
  canAddLanes: PropTypes.bool,
  editLaneTitle: PropTypes.bool
}

KanbanBoard.defaultProps = {
  data: {
    lanes: []
  },
  canAddLanes: false,
  editLaneTitle: false
}

export default KanbanBoard
