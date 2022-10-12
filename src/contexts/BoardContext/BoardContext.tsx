import {
    Children,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
// import { category } from '../../services/http/patika/endpoints/category'
import { StateType, ContextType } from './types'

export const initialState: StateType = {
  boards: [],
}

export const BoardContext = createContext<ContextType>({
  dispatches: {},
  state: initialState,
  setState: () => {}
})

export const BoardProvider: FC<PropsWithChildren> = ({children}) => {
  const [state, setState] = useState<StateType>(initialState)
  const dispatches: ContextType['dispatches'] = {}
//   useEffect(() => {
//     category.list().then(({ data }) => {
//       setState((prev) => ({ ...prev, categories: data }))
//     })
//   }, [])

//   dispatches.addCategory = (category: any) => {
//     setState((prev) => ({
//       ...prev,
//       categories: [...prev.categories, category],
//     }))
//   }
//   dispatches.updateCategory = (id:number,category:any)=>{
//     setState(prev=>({
//         ...prev,
//         categories: prev.categories.map(cat=>({
//             ...cat,
//             title : (id===cat.id) ? category.title : cat.title
//         }))
//     }))
//   }

  return (
    <BoardContext.Provider
      value={{
        state,
        setState,
        dispatches,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export const useBoardContext = ()=>{
    return useContext(BoardContext)
}