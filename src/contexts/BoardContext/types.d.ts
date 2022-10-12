import { Dispatch, SetStateAction } from "react";

export type StateType = {
    boards: number[] | any
  }
  
  export type ContextType = {
    state: StateType,
    setState:Dispatch<SetStateAction<StateType | any>>
    dispatches :  any
  }