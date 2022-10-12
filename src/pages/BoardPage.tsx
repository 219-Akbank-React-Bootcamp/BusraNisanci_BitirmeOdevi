import { BoardFormProps } from "../components/MainBoard/ScrumBoard/ScrumBoard.types"
import { useBoardContext } from "../contexts/BoardContext/BoardContext";
import { auth } from "../services/http/patika/endpoints/auth";
import { useNavigate } from "react-router";
import ScrumBoard from "../components/MainBoard/ScrumBoard";
import { BoardFormValuesProps } from "../components/MainBoard/ScrumBoard/ScrumBoard.types";

const BoardPage = () => {
  const navigate = useNavigate();
  const { setState, state } = useBoardContext();
  console.log(state)
  const handleBoardRegister: BoardFormProps["onBoardRegister"] = (values) => {
   
    auth.board(values).then(({ data }) => {
      setState([data])
      navigate(`/board/${data.id}`)
    }) 
      
    
  };

  return <ScrumBoard onBoardRegister={handleBoardRegister} />;
};

export default BoardPage;
