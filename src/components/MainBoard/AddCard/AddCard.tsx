import React from "react";
import { useState } from "react";
import { useBoardContext } from "../../../contexts/BoardContext/BoardContext";
import { card } from "../../../services/http/patika/endpoints/card";
import { list } from "../../../services/http/patika/endpoints/list";
import ListInfo from "../ListInfo";
import { CardFormValuesProps } from "./AddCard.types";

const AddCard = ({ listId }) => {
  const {
    setState,
    state,
    currentBoard,
    setCurrentBoard,
    currentCards,
    setCurrentCards,
    currentLists,
  } = useBoardContext();

  const { getBoards, getCards } = useBoardContext();

  const handleAddCard = async (e: any) => {
    e.preventDefault();
    await card
      .card({ title: "UntitledCard", listId: listId })
      .then(() => getCards(listId));
  };

  return (
    <div className="w-full h-10 p-2 flex bg-[#2c2923] my-1 rounded-md hover:bg-[#FFF4CF]">
      <span className="material-symbols-outlined">add</span>
      <form action="">
        <button className="w-full" onClick={handleAddCard}>
          {"Add Card"}
        </button>
      </form>
    </div>
  );
};

export default AddCard;
