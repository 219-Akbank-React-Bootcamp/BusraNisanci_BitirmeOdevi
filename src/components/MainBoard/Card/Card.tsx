import React from "react";
import Dropdown from "../../../contexts/Dropdown/Dropdown";
import { useState } from "react";
import CardInfo from "../CardInfo";
import CardFooter from "../CardFooter";

const Card = ({ cardInfos }: any) => {
  return (
    <div className="w-60 h-fit bg-[#FFB200] border border-solid-1 border-[#FFB200] rounded p-1 m-2">
      <CardInfo cardInfos={cardInfos} />

      {/* card seperator */}
      <div className="border-t-2 border-solid border-[#000] "></div>
      <CardFooter cardInfos={cardInfos} />
    </div>
  );
};

export default Card;
