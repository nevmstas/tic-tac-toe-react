import React,{useState} from 'react'
import {css} from '@emotion/core'

import {Square} from './Square'

import {isBoardFull, calculateWinner} from '../functions'

const container = css`
    display:flex;
    flex-direction:row;
    justify-content:center;
`

const game = css`
    display:flex;
    flex-direction: column;
`

const boardRow = css`
    &:after{
        clear: both;
        content:"";
        display:table;
    }
`

const gameInfo = css`
    font-size: 4rem;
    font-weight:bold;
`



export const Game = () =>{

    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ isXNext, setIsXNext ] = useState(true);

    const winner = calculateWinner(squares);

    function getStatus() {
        if (winner) {
          return "Winner: " + winner;
        } else if (isBoardFull(squares)) {
          return "Draw!";
        } else {
          return "Next player: " + (isXNext ? "X" : "O");
        }
      }
    
    
    function renderSquare(i){
        return <Square 
            value = {squares[i]} 
            onClick={() => {
                const nextSquares = squares.slice()
                nextSquares[i] = isXNext? 'X' : 'O'
                setSquares(nextSquares)
                setIsXNext(!isXNext)
            }}
        />
    }

    return (
        <>
            <div className={container}>
                <div className={game}>
                    <div className={boardRow}>
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
            </div>
            <div className={gameInfo}>{getStatus()}</div>
        </>
      )
}