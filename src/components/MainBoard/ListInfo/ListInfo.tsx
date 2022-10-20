import React, { useState } from "react";
import Dropdown from "../../../contexts/Dropdown/Dropdown";

const ListInfo = ({ listInfos }: any) => {
  return (
    <div className="p-2 bg-[#FFF4CF] rounded-md inline-flex w-full justify-between mb-1">
      <span className="font-bold font-sans">{listInfos.title}</span>
      <span class="material-symbols-outlined">delete</span>
    </div>
  );
};

export default ListInfo;
