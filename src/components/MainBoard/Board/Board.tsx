import React from "react";
import { useBoardContext } from "../../../contexts/BoardContext/BoardContext";
import AddList from "../AddList";
import ListCard from "../ListCard";

const Board = ({currentBoard}:any) => {
  const { setState, state } = useBoardContext();
  return (
    <div className="bg-[#fff] w-screen h-screen inline-flex p-4 font-sans ">
      {state.list.length >= 0 && 
     <div className="flex justify-center">
     {state.list.map((lst:any) => {
      return (
      <ListCard listInfos={lst} />
      )
     })};
     
     };
      
      
      <AddList />
    </div>
  );
};

export default Board;
