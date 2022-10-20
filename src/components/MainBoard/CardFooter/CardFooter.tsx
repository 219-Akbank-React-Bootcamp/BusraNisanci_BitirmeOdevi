import React from "react";

const CardFooter = ({ cardInfos }: any) => {
  return (
    <div className="inline-flex justify-between p-1 my-1">
      {/* Eğer varsa Tarih ve checklist tamamlandı oranı görünecek */}
      <div>{cardInfos.date}</div>
    </div>
  );
};

export default CardFooter;
