import React, { useState } from "react";
import Dropdown from "../../../contexts/Dropdown/Dropdown";
import EditableElement from "../../../contexts/EditableElement/EditableElement";

const CardInfo = ({ cardInfos }: any) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="flex justify-between">
      <EditableElement id={cardInfos?.id}>
        <div></div>
      </EditableElement>
      <span class="material-symbols-outlined">delete</span>
    </div>
  );
};

export default CardInfo;
