import React, { useRef, useEffect, ReactHTMLElement, useState } from "react";
import { EditableElementProps } from "./EditableElement.types";
import { FC } from "react";
import { board } from "../../services/http/patika/endpoints/board/index";
import { useBoardContext } from "../../contexts/BoardContext/BoardContext";
import Layout from "../../pages/Layout";

const EditableElement = (props: any) => {
  const { getBoards } = useBoardContext();

  const editRef = useRef(null);
  const onMouseUp = (element: any) => {
    const editId = document.querySelector("#editable")?.innerHTML;

    board
      .updateBoard({
        title: editId,
        members: [],
        id: props.id,
      })
      .then(() => getBoards());
  };

  return (
    <p id="editable" onMouseLeave={onMouseUp} contentEditable="true">
      Untitled Board
    </p>
  );
};

export default EditableElement;
