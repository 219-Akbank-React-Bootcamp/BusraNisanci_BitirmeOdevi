import {
    Children,
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { board } from "../../services/http/patika/endpoints/board";
import { StateType, ContextType } from './types'


export const initialState: StateType = {
  board: [],
  list: [],
  card: [],
  
}

export const BoardContext = createContext<ContextType>({
  state: initialState,
  setState: () => {},
  getBoards: () => {},
  setCurrentBoard: () => {},
  currentBoard: Array
})
 
export const BoardProvider: FC<PropsWithChildren> = ({children}) => {
  const [state, setState] = useState<StateType>(initialState)
  const [currentBoard, setCurrentBoard] = useState<ContextType>()
  useEffect(() => {
    getBoards()
  }, [])

  const getBoards = async() => {
    await board.getBoardAll().then((res) => setState(res.data)) 
  }
  
  useEffect(() => {
    const selectedBoard:any = state.find((brd:any) => brd.id == state.id )
    setCurrentBoard(selectedBoard)    
  }, [])

  return (
    <BoardContext.Provider
      value={{
        state,
        setState,
        getBoards,
        currentBoard,
        setCurrentBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export const useBoardContext = ()=>{
    return useContext(BoardContext)
}