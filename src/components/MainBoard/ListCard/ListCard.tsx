import React from "react";
import AddCard from "../AddCard";
import Card from "../../MainBoard/Card/index";
import ListInfo from "../ListInfo";
import { useBoardContext } from "../../../contexts/BoardContext/BoardContext";

const ListCard = ({ listInfos }: any) => {
  const { state, currentLists, currentCards } = useBoardContext();
  console.log(currentCards);
  return (
    <div className="w-60 h-fit bg-[#FFB200] border border-solid-1 border-[#FFB200] rounded p-1 m-2">
      <ListInfo listInfos={listInfos} />
      {listInfos.cards.length > 0 &&
        listInfos.cards.map((crd: any, idx: number) => {
          return (
            <div key={idx} className="flex justify-center">
              <Card cardInfos={crd} />
            </div>
          );
        })}

      <AddCard listId={listInfos.id} />
    </div>
  );
};

export default ListCard;
