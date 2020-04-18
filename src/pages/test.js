import React, { useState }  from "react"
import { graphql } from "gatsby"
import range from "lodash/range"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {rowIsValid, colIsValid, sectorIsValid, createEmptyBoard, solve, printBoard, testBoard} from "../utils/solver"

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  column-gap: 0;
  row-gap: 0;
  min-height: 50vw;
  width: 50vw;
  min-width: 500px;
`

const Tile = styled.div`
  border: 1px solid #000;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

const Input = styled.input`
  width: 50%;
  max-width: 100%;
  max-height: 100%;
`

function numberIsValid(num) {
  for(let i = 1; i < 10; i++) {
    if(num === i) {
      return true
    }
  }
  return false
}
//
// const b = testBoard(1)
// solve(b)
// printBoard(b)

const TestPage = ({ data, location }) => {
  const [board, setBoard] = useState(testBoard(1));

  const siteTitle = data.site.siteMetadata.title

  const handleChange = (index_1d, event) => {

    const b = board.slice()

    // deleting a number is always valid
    if(event.currentTarget.value === "") {
      b[index_1d] = null
      setBoard(b)
      return
    }

    const value = parseInt(event.currentTarget.value, 10)

    if(numberIsValid(value) && rowIsValid(value, index_1d, b) && colIsValid(value, index_1d, b) && sectorIsValid(value, index_1d, b)) {
      b[index_1d] = value
      setBoard(b)
    }

  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Testing" />

      <div>
        <h1>Sudoku</h1>
      </div>

      <div>
        {/* todo add an extra step to prevent accidental clicks */}
        <p>
          <button onClick={() => setBoard([])}>Generate New Puzzle</button>
        </p>
      </div>

      <div>
        {/* todo add an extra step to prevent accidental clicks */}
        <p>
          <button onClick={() => setBoard(createEmptyBoard())}>Reset Board</button>
        </p>
      </div>

      <GameGrid>
        {range(1,10).map((i) => {
          return (
            <React.Fragment key={i}>
              {range(1,10).map((j) => {
                const style = {}

                if(j % 3 === 0 && j !== 9) {
                  style.borderRight = '3px solid black'
                }
                if(i % 3 === 0 && i !== 9) {
                  style.borderBottom = '3px solid black'
                }
                const index_1d = (i - 1) * 9 + (j - 1)
                return (
                  <Tile key={`${i}-${j}`} id={`cell-${i}-${j}`} style={style}>
                    {/*{`${i}-${j}`}<br/>*/}
                    {/*{index_1d}*/}
                    <Input type="text" value={board[index_1d] || ""} onChange={handleChange.bind(null, index_1d)}/>
                  </Tile>
                )
              })}
            </React.Fragment>
          )
        })}
      </GameGrid>
    </Layout>
  )
}

export default TestPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
