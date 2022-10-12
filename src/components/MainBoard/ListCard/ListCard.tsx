import React from "react";
import AddCard from "../AddCard";

import AddCardTitle from "../AddCardTitle";
import Card from "../../MainBoard/Card/index"
import ListInfo from "../ListInfo";

const ListCard = () => {
  return (
    <div className="w-60 h-fit bg-[#FFB200] border border-solid-1 border-[#FFB200] rounded p-1 m-2">
      <ListInfo />
      {state.board.list.card.length >= 0 && (<div className=""><Card /></div>)}
      <AddCard />
    </div>
  );
};

export default ListCard;
