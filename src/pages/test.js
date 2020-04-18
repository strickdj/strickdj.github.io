import React, { useState }  from "react"
import { graphql } from "gatsby"
import range from "lodash/range"
import styled from "@emotion/styled"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {testBoard, checkBoard, solve} from "../utils/sudoku"


const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  column-gap: 0;
  row-gap: 0;
  margin: 0 auto;
  width: 80vw;
  max-width: 60vh;
  min-width: 450px;
  min-height: 450px;
  height: 80vw;
  max-height: 60vh;
  font-size: 1rem;
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
`

const ActionPalette = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  width: 50vw;
  min-width: 500px;
`

const CellSpan = styled.span`
  color: #333;
  font-size: 1.5rem;
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
  const sarting_pos = testBoard(1)
  const [board, setBoard] = useState(sarting_pos.slice())
  const [errors, setErrors] = useState([])

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

    if(numberIsValid(value)) {
      b[index_1d] = value
      setBoard(b)
    }

  }

  const handleReset = (e) => {
    setBoard(sarting_pos.slice())
    setErrors([])
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
          onClick={() => setErrors(checkBoard(board))}
        >Check Board</Button>

        {/* todo add an extra step to prevent accidental clicks */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => console.log("function not implemented")}
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
          onClick={() => {
            solve(board)
            setBoard(board.slice())
          }}
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
                  style.background = 'red'
                }
                return (
                  <Tile key={`${i}-${j}`} id={`cell-${i}-${j}`} style={style}>
                    {/*{`${i}-${j}`}<br/>*/}
                    {/*{index_1d}*/}

                    {sarting_pos[index_1d] === 0 ? (
                      <Input type="text" value={board[index_1d] || ""} onChange={handleChange.bind(null, index_1d)}/>
                    ) : (
                      <CellSpan>{sarting_pos[index_1d]}</CellSpan>
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
