import React from "react";
import { initialState, useBoardContext } from "../../../contexts/BoardContext/BoardContext";
import { ListFormValuesProps } from "./AddList.types";
import { ListFormProps } from "./AddList.types";
import { useState } from "react";
const AddList = () => {
  const { setState, state } = useBoardContext();
  const [listFormValues, setListFormValues] = useState<ListFormValuesProps>( 
    {title: "Untitled List",
    boardId: Number({state[0 as unknown as keyof typeof state].id}),
    order:   
})
  const handleAddList = (e:any) => {
    e.preventDefault()
    props.onListRegister(listFormValues);
  };
  return (
    <div>
      <div className="w-full w-60 h-10 m-2 p-1 flex bg-[#6e654f] hover:bg-[#FFF4CF] my-1 rounded-md">
        <span className="material-symbols-outlined">add</span>
        <button onClick={handleAddList}>Add List</button>
      </div>
    </div>
  );
};

export default AddList;
