import { Dispatch, SetStateAction } from "react";

export type StateType = {
    length: number;
    map(arg0: (brd: any) => JSX.Element): import("react").ReactNode;
    find(arg0: (brd: any) => boolean): any;
    updateBoard: any;
    id: any;
    board: Array<{
      title: string,
      members:Array
    }>;
    list: Array<{
      title: string,
      boardId?:number,
      order?: number,}>;
    card:Array<{
      title: string,
      listId:number,
      order: number,
      description: string,
      duedate: Date,
    }>;
  }
  
  export type ContextType = {
    state: StateType,
    setState:Dispatch<SetStateAction<StateType | any>>,
    getBoards: ()=>void,
    setCurrentBoard: React.useState<StateType[]>;
    currentBoard: Array
    
  }