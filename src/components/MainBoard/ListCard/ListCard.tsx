import React from "react";
import AddCard from "../AddCard";
import Card from "../../MainBoard/Card/index";
import ListInfo from "../ListInfo";
import { useBoardContext } from "../../../contexts/BoardContext/BoardContext";

const ListCard = ({ listInfos }: any) => {
  console.log(listInfos);
  const { state, currentLists } = useBoardContext();

  return (
    <div className="w-60 h-fit bg-[#FFB200] border border-solid-1 border-[#FFB200] rounded p-1 m-2">
      <ListInfo listInfos={listInfos} />

      {/* {currentBoard.card.length >= 0 &&
        currentBoard.card.map((crd: any) => {
          <div className="">
            <Card />
          </div>;
        })} */}
      <AddCard />
    </div>
  );
};

export default ListCard;
