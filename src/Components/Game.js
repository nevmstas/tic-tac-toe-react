import React from 'react'
import {css} from '@emotion/core'

import {Square} from './Square'

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



export const Game = () =>{
    return (
        <div className={container}>
          <div className={game}>
              <div className={boardRow}>
                <Square value={0} onClick={null}/>
                <Square value={1} onClick={null}/>
                <Square value={2} onClick={null}/>
              </div>
              <div className="board-row">
                <Square value={3} onClick={null}/>
                <Square value={4} onClick={null}/>
                <Square value={5} onClick={null}/>
              </div>
              <div className="board-row">
                <Square value={6} onClick={null}/>
                <Square value={7} onClick={null}/>
                <Square value={8} onClick={null}/>
              </div>
          </div>
        </div>
      )
}