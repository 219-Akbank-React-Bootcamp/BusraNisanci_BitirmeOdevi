import React, { useState } from "react";
import Dropdown from "../../../contexts/Dropdown/Dropdown";

const ListInfo = ({listInfos}:any) => {
  const [showDropDown, setShowDropDown]=useState(false)
  return (
    <div className="p-2 bg-[#FFF4CF] rounded-md inline-flex w-full justify-between mb-1">
      <span className="font-bold font-sans">{listInfos.title}</span>
      <span className="material-symbols-outlined">more_vert</span>
      <div onClick={()=>setShowDropDown(true)}>{showDropDown && <Dropdown onClose={()=>setShowDropDown(false)}><div><p>Delete List</p></div></Dropdown>}</div>
    </div>
  );
};

export default ListInfo;
