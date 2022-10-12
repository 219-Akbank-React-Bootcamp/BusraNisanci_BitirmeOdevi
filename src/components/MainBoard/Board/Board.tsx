import React from "react";
import AddList from "../AddList";
import ListCard from "../ListCard";

const Board = () => {
  return (
    <div className="bg-[#fff] w-screen h-screen inline-flex p-4 font-sans ">
      {/* {state.board.list.length >= 0 && (<div className=""><ListCard /></div>)} */}
      <AddList />
    </div>
  );
};

export default Board;
