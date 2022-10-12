
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useBoardContext } from "../../../../contexts/BoardContext/BoardContext";



const AddBoardButton=() => {
  const navigate = useNavigate()
  const { setState, state } = useBoardContext();
  return (
    <button
    onClick={() => navigate(`/board/${state[0 as unknown as keyof typeof state].id}`)}
    type="submit"
    className="h-32 w-32 bg-[#FFCB42] border border-solid-6 hover:bg-[#FFB200] hover:underline rounded border-[#277BC0] text-xs m-6 font-bold text-[#275378]"
  >
   {state[0 as unknown as keyof typeof state].title}
  </button>
  );
};

export default AddBoardButton;
