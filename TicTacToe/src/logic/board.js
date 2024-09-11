import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCehck) => {
    //we check all combination to see if X or O won
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if (
        boardToCehck[a] &&
        boardToCehck[a] === boardToCehck[b] &&
        boardToCehck[a] === boardToCehck[c]
      ){
        return boardToCehck[a]
      }
    }
    //if no one wins
    return null
}

export  const checkEndGame = (newBoard) => {
    //We check if there is a Tie
    //If there is not new spaces empties in the board
    return newBoard.every((square) => square !== null)
  }