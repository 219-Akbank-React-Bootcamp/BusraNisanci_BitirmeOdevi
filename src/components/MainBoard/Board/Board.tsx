import React from "react";
import { useBoardContext } from "../../../contexts/BoardContext/BoardContext";
import AddList from "../AddList";
import ListCard from "../ListCard";

const Board = () => {
  const { setState, state, currentLists } = useBoardContext();
  console.log(currentLists);
  return (
    <div className="bg-[#fff] w-screen h-screen inline-flex p-4 font-sans ">
      {currentLists.length >= 0 &&
        currentLists.map((lst: any) => {
          return (
            <div className="flex justify-center">
              <ListCard listInfos={lst} />
            </div>
          );
        })}

      <AddList />
    </div>
  );
};

export default Board;
