import React, { useState } from "react"

import { LayoutHero, Seo, KanbanBoard } from "@components"

import { boards } from "@utils/board_data"

import * as S from "@styles/default"

const PlaygroundPage = () => {
  const [selectData, setSelectData] = useState({
    lanes: [],
  })

  function selectedBoard(selected) {
    let obj = {
      lanes: selected.lanes,
    }

    setSelectData(obj)
  }

  return (
    <LayoutHero title="Playground" bannerTags="code, programming, computer">
      <Seo title="Playground" />
      <S.DefaultHeader>
        <S.DefaultDescription>
          {" "}
          Where ideas born and rise to the stars
        </S.DefaultDescription>
      </S.DefaultHeader>
      <S.MainContent style={{ maxWidth: "100vw" }}>
        <center>
          <S.CustomParagraphy>
            After this point everything is experimental...
          </S.CustomParagraphy>
        </center>
        <S.CustomParagraphy>
          Please select a board name to see the kanban board details
        </S.CustomParagraphy>
        <S.CardsWrapper>
          {boards.map((board, i) => (
            <S.CustomCard
              style={{ marginRight: "1rem" }}
              key={i}
              onClick={() => selectedBoard(board)}
            >
              <S.CustomParagraphy style={{ textTransform: "capitalize" }}>
                {board.name}
              </S.CustomParagraphy>
            </S.CustomCard>
          ))}
        </S.CardsWrapper>
        <br />
        <KanbanBoard
          data={selectData}
          editable={true}
          onChange={selectedBoard}
        />
      </S.MainContent>
    </LayoutHero>
  )
}

export default PlaygroundPage
