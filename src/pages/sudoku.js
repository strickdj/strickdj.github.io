import React, { useState }  from "react"
import { graphql } from "gatsby"
import range from "lodash/range"
import styled from "@emotion/styled"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {randomBoard, checkBoard, solve, EMPTY_CELL} from "../utils/sudoku"


const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  column-gap: 0;
  row-gap: 0;
  margin: 2rem auto;
  width: 80vw;
  height: 100vw;
  max-width: 60vh;
  max-height: 60vh;
  
  @media (min-width: 740px) {
    height: 80vw;
  }
`

const Tile = styled.div`
  border: 1px solid #000;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  border: 0;
  border-bottom: 1px dashed black;
  text-align: center;
  outline: none;
  appearance: none;
`

const ActionPalette = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem auto;
`

const CellSpan = styled.span`
  color: #333;
  justify-self: center;
  align-self: center;
`

function numberIsValid(num) {
  for(let i = 1; i < 10; i++) {
    if(num === i) {
      return true
    }
  }
  return false
}

const TestPage = ({ data, location }) => {
  const [startingPos, setStartingPos] = useState(randomBoard())
  const [board, setBoard] = useState(startingPos.slice())
  const [errors, setErrors] = useState([])

  const siteTitle = data.site.siteMetadata.title

  const handleChange = (index_1d, event) => {

    const b = board.slice()

    // deleting a number is always valid
    if(event.currentTarget.value === "") {
      b[index_1d] = EMPTY_CELL
      setBoard(b)
      return
    }

    const value = parseInt(event.currentTarget.value, 10)

    if(numberIsValid(value)) {
      b[index_1d] = value
      setBoard(b)
    }

  }

  const handleReset = () => {
    setBoard(startingPos.slice())
    setErrors(errors => [])
  }

  const handleCheckBoard = () => {
    setErrors(errors => checkBoard(board))
  }

  const handleGenerate = () => {
    const starting_pos = randomBoard()
    setStartingPos(pos => starting_pos)
    setBoard(board => starting_pos)
  }

  const handleSolve = () => {
    setBoard(board => {
      solve(board)
      return board.slice()
    })
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Testing" />
      <div>
        <h1>Sudoku</h1>
      </div>

      <ActionPalette>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleCheckBoard}
        >Check Board</Button>

        {/* todo add an extra step to prevent accidental clicks */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleGenerate}
        >Generate New Puzzle</Button>

        {/* todo add an extra step to prevent accidental clicks */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleReset}
        >Reset Board</Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={handleSolve}
        >Solve</Button>
      </ActionPalette>

      <GameGrid>
        {range(1,10).map((i) => {
          return (
            <React.Fragment key={i}>
              {range(1,10).map((j) => {
                const index_1d = (i - 1) * 9 + (j - 1)
                const style = {}

                if(j % 3 === 0 && j !== 9) {
                  style.borderRight = '3px solid black'
                }
                if(i % 3 === 0 && i !== 9) {
                  style.borderBottom = '3px solid black'
                }
                if(errors[index_1d] === true) {
                  style.background = 'rgba(255, 0, 0, .5)'
                }
                return (
                  <Tile key={index_1d} style={style}>
                    {/*{`${i}-${j}`}<br/>*/}
                    {/*{index_1d}*/}
                    {startingPos[index_1d] === 0 ? (
                      <Input type="number" value={board[index_1d] || ""} onChange={handleChange.bind(null, index_1d)}/>
                    ) : (
                      <CellSpan>{startingPos[index_1d]}</CellSpan>
                    )}
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
