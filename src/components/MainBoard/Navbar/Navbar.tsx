import React from "react";
import Button from "../../Enterence/Button";
import { NavLink } from "react-router-dom";
import EditableElement from "../../../contexts/EditableElement/EditableElement";
import { useLoginContext } from "../../../contexts/LoginContext/LoginContext"
import { useBoardContext } from "../../../contexts/BoardContext/BoardContext";

const Navbar = () => {
  const { logout, username } = useLoginContext()
  const { setState, state } = useBoardContext()
  const handleLogout = () => {
    logout()
  }
  return (
    <nav className="inline-flex bg-[#3e4891] w-full text-white font-['Libre_Baskerville'] justify-between">
      
      <div className="board-div m-2 flex justify-center font-semibold">
        <span className="material-symbols-outlined">dataset</span>
        <NavLink to="/scrumboard" end>
          BOARDS
        </NavLink>
      </div>
      {/* Eğer Login ise ve bir board çağırılmışsa Board Adı Ortada Görünecek  ayrıca üzerine tıklandığında ismi deiğiştirebilmek için edit yapabilinecek */}
      <div className="boardName-div m-2 flex justify-center">
      <EditableElement>
        <div>
         {state[0 as unknown as keyof typeof state].title}
        </div>
      </EditableElement>
      </div>
      
      <div className="logout-div m-2 flex justify-center font-semibold">
        <span className="material-symbols-outlined">logout</span>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;
