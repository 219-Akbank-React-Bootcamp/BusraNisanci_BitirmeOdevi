import React, { useRef, useEffect, ReactHTMLElement, useState } from "react";
import { EditableElementProps } from "./EditableElement.types";
import { FC } from "react";
import {board} from "../../services/http/patika/endpoints/board/index"
import { useBoardContext } from "../../contexts/BoardContext/BoardContext";


const EditableElement = (props: any) => {
  const { getBoards  } = useBoardContext();
  const editRef = useRef(null)
  const onMouseUp = (element: any) => {
    const vr =document.querySelector('#editable')?.innerHTML
    console.log(vr)
    board.updateBoard({
      title: vr,
      members: [],
      id: props.id
    }).then(() => getBoards() ) 

  };

  return <p id="editable" onMouseOut={onMouseUp} contenteditable="true">This is an editable paragraph.</p>
};

export default EditableElement;