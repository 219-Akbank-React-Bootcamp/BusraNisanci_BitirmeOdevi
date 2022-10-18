import React, { FC, useEffect, useState } from 'react'
import Board from '../components/MainBoard/Board'
import Navbar from '../components/MainBoard/Navbar'
import { useBoardContext } from '../contexts/BoardContext/BoardContext'
import { auth } from "../services/http/patika/endpoints/auth";
import { ListFormProps } from '../components/MainBoard/AddList/AddList.types';
import { useParams } from 'react-router';
export type BoardFormValuesProps = {}

const Layout = () => {
  const { setState, state } = useBoardContext();
  const {currentBoard, setCurrentBoard } = useBoardContext();

  const { id } = useParams()
 
  
  return (
    <div>
    
      <Navbar  />
      <Board />
      
    </div>
  )
}

export default Layout