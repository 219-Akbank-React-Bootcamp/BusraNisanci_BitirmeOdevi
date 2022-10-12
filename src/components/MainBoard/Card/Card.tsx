import React from "react";

const Card = () => {
  return (
    <div className="w-60 h-fit bg-[#FFB200] border border-solid-1 border-[#FFB200] rounded p-1 m-2">
      <div className="p-1 my-1 font-['Montserrat']">CardTitle</div>

      {/* Eğer varsa Label renkleri eklensin */}
      <div>LabelRenkleri</div>
      <div className="border-t-2 border-solid border-[#000] "></div>
      <div className="inline-flex justify-between p-1 my-1">
        {/* Eğer varsa Tarih ve checklist tamamlandı oranı görünecek */}
        <div>CardTarih</div>
        <div>Checked/Lenght</div>
      </div>
    </div>
  );
};

export default Card;
