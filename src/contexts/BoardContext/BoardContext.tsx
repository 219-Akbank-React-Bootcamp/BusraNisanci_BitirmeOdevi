import {
    Children,
  createContext,
  FC,
  PropsWithChildren,
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
  getBoards: () => {}
})

export const BoardProvider: FC<PropsWithChildren> = ({children}) => {
  const [state, setState] = useState<StateType>(initialState)

  useEffect(() => {
    getBoards()
  }, [])

  const getBoards = async() => {
    await board.getBoardAll().then((res) => setState(res.data)) 
  }

  return (
    <BoardContext.Provider
      value={{
        state,
        setState,
        getBoards,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export const useBoardContext = ()=>{
    return useContext(BoardContext)
}