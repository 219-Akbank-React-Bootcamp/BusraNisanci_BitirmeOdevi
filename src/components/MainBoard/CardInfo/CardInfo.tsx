import React, { useState } from "react";
import Dropdown from "../../../contexts/Dropdown/Dropdown";

const CardInfo = () => {
  const [showDropDown, setShowDropDown]=useState(false)
  return (
    <div>
      <div className="p-1 my-1 font-['Montserrat']">CardTitle</div>
      <span className="material-symbols-outlined">more_vert</span>
      <div className="relative cursor-pointer" onClick={()=>setShowDropDown(true)}>
        {showDropDown && <Dropdown className="bg-[#fff] w-32 p-2 rounded-sm cursor-pointer" onClose={()=>setShowDropDown(false)}>
          <div>
            <p>Delete List</p>
          </div></Dropdown>}
      </div>
    </div>
  );
};

export default CardInfo;
