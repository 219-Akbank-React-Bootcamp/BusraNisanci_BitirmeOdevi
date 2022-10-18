import React from "react";
import AddCard from "../AddCard";
import Card from "../../MainBoard/Card/index"
import ListInfo from "../ListInfo";
import { useBoardContext } from "../../../contexts/BoardContext/BoardContext";

const ListCard = () => {
  const {  state } = useBoardContext();
  const { currentBoard, setCurrentBoard}= useBoardContext();
  return (
    <div className="w-60 h-fit bg-[#FFB200] border border-solid-1 border-[#FFB200] rounded p-1 m-2">
      {currentBoard.list.length >= 0 && currentBoard.list.map((lst:any) => {
        (<div className=""><ListInfo listInfos={lst}/></div>)
      })}
      
      {currentBoard.card.length >= 0 && currentBoard.card.map((crd:any) => {
        (<div className=""><Card /></div>)
})
      
      }
      <AddCard />
    </div>
  );
};

export default ListCard;
