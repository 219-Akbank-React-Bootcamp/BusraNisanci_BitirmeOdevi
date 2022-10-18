import React, { useEffect } from "react";
import { initialState, useBoardContext } from "../../../contexts/BoardContext/BoardContext";
import { ListFormValuesProps } from "./AddList.types";
import { ListFormProps } from "./AddList.types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { on } from "stream";
import { board } from "../../../services/http/patika/endpoints/board";
import { list } from "../../../services/http/patika/endpoints/list"

const AddList = (props:any) => {
  
  const { setState, state } = useBoardContext();
  const { getBoards  } = useBoardContext();
  const { currentBoard, setCurrentBoard} = useBoardContext()
  const [listFormValues, setListFormValues] = useState<ListFormValuesProps>({ 
    title: "Untitled List",
    boardId: 0,
    order: 0,  
})
const handleAddList = (e:any) => {
  e.preventDefault()
  console.log("tıklandı")
  console.log(currentBoard)
  //  setListFormValues([...state, state.list:{list:listFormValues}])
  
};
  // const getLists =async () => {
  //   await list.getListAll().then((res) => setState(res.data)) 
  // }
  // const handleAddList: ListFormProps["onListRegister"] = (values) => {
  //   list.list(values).then(()=> getLists)
  // }
  return (
    <div>
      <div className="w-60 h-10 m-2 p-1 flex bg-[#6e654f] hover:bg-[#FFF4CF] my-1 rounded-md">
        <span className="material-symbols-outlined">add</span>
        <form>
          <button className="w-full" onClick={handleAddList}>Add List</button>
        </form>
      </div>
    </div>
  );
};

export default AddList;



// state.updateList(state, {list: setListFormValues}).then(() => getBoards() )