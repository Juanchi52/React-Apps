import { useState } from "react"
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import {TURNS} from "./constants"
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

function App (){
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
 
  const [turn, setTurn] = useState(() =>  {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  })

  const [winner,setWinner] = useState(null) //null no winner and false empate



  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }



  //I update the turn if it is X or O
  const updateBoard = (index) => {
    //I dont update the position if has something
    if (board[index] || winner) return
    //update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //change the turn
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    //save the game
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    //check if there is a winner
    const  newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)  
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  

    return(
    <main className = "board">   
      <h1>
          Tic Tac Toe
      </h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className = "game">
          {
            //I create the map/board
            board.map((square, index) => {
              return(
                <Square
                key = {index}
                index = {index}
                updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          } 
      </section>

      <section className = "turn">
          <Square isSelected = {turn === TURNS.x}>
            {TURNS.x}
          </Square>
          <Square isSelected = {turn === TURNS.o}>
            {TURNS.o}
          </Square>
      </section>

     <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>)
}

export default App