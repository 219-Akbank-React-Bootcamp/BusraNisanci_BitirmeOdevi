import React from "react";


const CardFooter = () => {
  
  return (
    <div className="inline-flex justify-between p-1 my-1">
        {/* Eğer varsa Tarih ve checklist tamamlandı oranı görünecek */}
        <div>CardTarih</div>
        <div>Checked/Lenght</div>
    </div>
  );
};

export default CardFooter;
