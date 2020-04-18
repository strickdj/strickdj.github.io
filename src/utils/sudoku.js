import chunk from "lodash/chunk"

const EMPTY_CELL = 0

const testBoards = [
  [
    9, 1, 5, 3, 0, 0, 6, 7, 0,
    6, 8, 0, 1, 0, 7, 0, 4, 0,
    4, 2, 7, 5, 6, 0, 0, 0, 0,
    8, 0, 1, 0, 2, 6, 3, 5, 4,
    0, 4, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 6, 0, 2, 0, 0, 0, 0, 0,
    5, 0, 8, 7, 3, 0, 1, 0, 6,
    0, 0, 0, 6, 8, 0, 0, 9, 7
  ],
  [
    3, 0, 6, 5, 0, 8, 4, 0, 0,
    5, 2, 0, 0, 0, 0, 0, 0, 0,
    0, 8, 7, 0, 0, 0, 0, 3, 1,
    0, 0, 3, 0, 1, 0, 0, 8, 0,
    9, 0, 0, 8, 6, 3, 0, 0, 5,
    0, 5, 0, 0, 9, 0, 6, 0, 0,
    1, 3, 0, 0, 0, 0, 2, 5, 0,
    0, 0, 0, 0, 0, 0, 0, 7, 4,
    0, 0, 5, 2, 0, 6, 3, 0, 0
  ]
]

export function testBoard(i) {
  return testBoards[i].slice()
}

/**
 * Given a 1d index to a 9x9 sudoku board
 * return the 1d index to the starting sector tile
 * where the starting sector tile is the top left most tile
 * of the sector
 * @param index_1d
 */
const sectors_map = {
  0: 0, 1: 0, 2: 0, 9: 0, 10: 0, 11: 0, 18: 0, 19: 0, 20: 0,
  3: 3, 4: 3, 5: 3, 12: 3, 13: 3, 14: 3, 21: 3, 22: 3, 23: 3,
  6: 6, 7: 6, 8: 6, 15: 6, 16: 6, 17: 6, 24: 6, 25: 6, 26: 6,
  27: 27, 28: 27, 29: 27, 36: 27, 37: 27, 38: 27, 45: 27, 46: 27, 47: 27,
  30: 30, 31: 30, 32: 30, 39: 30, 40: 30, 41: 30, 48: 30, 49: 30, 50: 30,
  33: 33, 34: 33, 35: 33, 42: 33, 43: 33, 44: 33, 51: 33, 52: 33, 53: 33,
  54: 54, 55: 54, 56: 54, 63: 54, 64: 54, 65: 54, 72: 54, 73: 54, 74: 54,
  57: 57, 58: 57, 59: 57, 66: 57, 67: 57, 68: 57, 75: 57, 76: 57, 77: 57,
  60: 60, 61: 60, 62: 60, 69: 60, 70: 60, 71: 60, 78: 60, 79: 60, 80: 60,
}

export function createEmptyBoard() {
  const board = []
  for(let i = 0; i < 81; i++) {
    board[i] = EMPTY_CELL
  }
  return board
}

export function cellIsValid(index_1d, board) {
  const cell_copy = board[index_1d]
  board[index_1d] = EMPTY_CELL

  const result = (
    rowIsValid(cell_copy, index_1d, board)
    && colIsValid(cell_copy, index_1d, board)
    && sectorIsValid(cell_copy, index_1d, board)
  )

  board[index_1d] = cell_copy
  return result
}

export function rowIsValid(num, index_1d, board) {
  const row = Math.floor(index_1d / 9) + 1
  const row_start = (row - 1) * 9
  const row_end = row_start + 8
  for(let i = row_start; i <= row_end; i++) {
    if(num === board[i]) {
      return false
    }
  }
  return true
}

export function colIsValid(num, index_1d, board) {
  for(let i = (index_1d % 9); i < 81; i+=9) {
    if(num === board[i]) {
      return false
    }
  }
  return true
}

export function sectorIsValid(num, index_1d, board) {
  const start = sectors_map[index_1d]
  for(let i = start; i < start + 3; i++) {
    if(num === board[i]) {
      return false
    }
    if(num === board[i + 9]) {
      return false
    }
    if(num === board[i + 18]) {
      return false
    }
  }

  return true
}

function isSafe(num, index_1d, board) {
  return (
    rowIsValid(num, index_1d, board) &&
    colIsValid(num, index_1d, board) &&
    sectorIsValid(num, index_1d, board) &&
    board[index_1d] === EMPTY_CELL
  )
}

function findUnfilledCell(board) {
  for (let i = 0; i < 81; i++) {
    if (board[i] === EMPTY_CELL) {
      return i
    }
  }
  return false
}

export function checkBoard(board) {
  const errors = []
  for(let i = 0; i < board.length; i++) {
    if(!board[i]) {
      errors[i] = false
      continue
    }

    // if cell is valid mark this cell as false
    errors[i] = !cellIsValid(i, board)
  }
  return errors
}

export function solve(board) {
  const index_1d = findUnfilledCell(board)

  if(index_1d === false) {
    return true
  }

  for(let i = 1; i <= 9; i++) {
    if(isSafe(i, index_1d, board)) {
      board[index_1d] = i

      if(solve(board)) {
        return true
      }

      board[index_1d] = EMPTY_CELL
    }
  }
  return false
}

export function printBoard(board) {
  const a = chunk(board, 9)
  for(let i = 0; i < a.length; i++) {
    console.log(JSON.stringify(a[i]))
  }
}
