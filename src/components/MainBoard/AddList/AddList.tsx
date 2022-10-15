import React, { useEffect } from "react";
import { initialState, useBoardContext } from "../../../contexts/BoardContext/BoardContext";
import { ListFormValuesProps } from "./AddList.types";
import { ListFormProps } from "./AddList.types";
import { useState } from "react";
import { useParams } from "react-router-dom";


const AddList = (props:any) => {
  
  const { setState, state } = useBoardContext();
//   const [listFormValues, setListFormValues] = useState<ListFormValuesProps>( 
//    ...state, list:{title: "Untitled List",
//     boardId: {},
//     order: 0,  
// })

  const handleAddList = (e:any) => {
    e.preventDefault()
    props.onListRegister();
  };
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
