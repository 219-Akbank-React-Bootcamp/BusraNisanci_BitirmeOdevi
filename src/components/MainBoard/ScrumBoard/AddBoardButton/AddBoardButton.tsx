import { getMaxListeners } from "process";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useBoardContext } from "../../../../contexts/BoardContext/BoardContext";

const AddBoardButton = ({ boardInfo }: any) => {
  const navigate = useNavigate();
  const { setState, state, currentBoard, setCurrentBoard, getLists } =
    useBoardContext();

  const boardHandle = async () => {
    navigate(`/board/${boardInfo.id}`);
    setCurrentBoard(boardInfo);
    await getLists(boardInfo.id);
  };

  return (
    <button
      onClick={boardHandle}
      type="submit"
      className="h-32 w-32 bg-[#FFCB42] border border-solid-6 hover:bg-[#FFB200] hover:underline rounded border-[#277BC0] text-xs m-6 font-bold text-[#275378]"
    >
      {boardInfo.title}
    </button>
  );
};

export default AddBoardButton;
