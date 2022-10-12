import React from "react";

// AddCard üzerine tıklandığında bu sayfa gelecek. Title girildikten sonra title ekleme/bu sayfa olacak. Sonra da card title gözükecek şekilde görünecek.
const AddCardTitle = () => {
  return (
    <div className="bg-[#FFF4CF] p-1 rounded-md">
      <form action="" className="">
        <input
          type="text"
          placeholder="Card Title..."
          className="rounded-md h-8 p-2 outline-none bg-[#FFF4CF]   border border-[#6e654f]"
        />

        <button className="bg-[#6e654f] rounded-md p-1 px-4 my-1">Add</button>
      </form>
    </div>
  );
};

export default AddCardTitle;
