import React, { FC, useEffect, useState } from "react";
import Board from "../components/MainBoard/Board";
import Navbar from "../components/MainBoard/Navbar";
import { useBoardContext } from "../contexts/BoardContext/BoardContext";
import { auth } from "../services/http/patika/endpoints/auth";
import { ListFormProps } from "../components/MainBoard/AddList/AddList.types";
import { useParams } from "react-router";
export type BoardFormValuesProps = {};

const Layout = () => {
  const { setState, state, currentBoard, setCurrentBoard, getLists } =
    useBoardContext();

  const { id } = useParams();
  useEffect(() => {
    if (state.length > 0) {
      const selectedBoard: any = state.find((brd: any) => id == brd.id);
      setCurrentBoard(selectedBoard);
      getLists(id);
    }
  }, [state]);

  return (
    <div>
      <Navbar currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} />
      <Board currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} />
    </div>
  );
};

export default Layout;
