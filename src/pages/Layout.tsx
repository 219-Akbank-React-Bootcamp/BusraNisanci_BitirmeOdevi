import React, { FC } from 'react'
import Board from '../components/MainBoard/Board'
import Navbar from '../components/MainBoard/Navbar'
import { BoardProps } from '../components/MainBoard/Board/Board.types'


export type BoardFormValuesProps = {}

const Layout: FC<BoardProps> = (props) => {
    
  return (
    <div>
    
      <Navbar />
      <Board />
      
    </div>
  )
}

export default Layout