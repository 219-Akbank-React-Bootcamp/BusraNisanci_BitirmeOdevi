import React from "react";
import { useState } from "react";
import { CardFormValuesProps } from "./AddCard.types";

const AddCard = () => {


  // const [cardFormValues, setCardFormValues] = useState<CardFormValuesProps>( 
//     {
//       title: "Untitled Card",
//       listId:Number({state[0 as unknown as keyof typeof state].id}),
//       order: number,
//       description: string,
//       duedate: Date,   
// })

  return (
    <div className="w-full h-10 p-2 flex bg-[#2c2923] my-1 rounded-md hover:bg-[#FFF4CF]">
      <span className="material-symbols-outlined">add</span>
      {/* onclick eklenecek addCardRegister gibi */}
      <button onClick={handleAddCard}>Add Card</button>
    </div>
  );
};

export default AddCard;
