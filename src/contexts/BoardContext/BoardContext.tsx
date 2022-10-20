import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { board } from "../../services/http/patika/endpoints/board";
import { StateType, ContextType } from "./types";
import { list } from "../../services/http/patika/endpoints/list";
import { card } from "../../services/http/patika/endpoints/card";

export const initialState: StateType = {
  board: [],
  list: [],
  card: [],
};

export const BoardContext = createContext<ContextType>({
  state: [],
  setState: () => {},
  getBoards: () => {},
  currentBoard: [],
  setCurrentBoard: () => {},
  getLists: () => {},
  currentLists: [],
});

export const BoardProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState([]);
  const [currentBoard, setCurrentBoard] = useState([]);
  const [currentLists, setCurrentLists] = useState([]);

  useEffect(() => {
    getBoards();
  }, []);

  const getBoards = async () => {
    await board.getBoardAll().then((res) => setState(res.data));
  };
  const getLists = async (id) => {
    await list.getListById(id).then((res) => setCurrentLists(res.data));
  };

  return (
    <BoardContext.Provider
      value={{
        state,
        setState,
        getBoards,
        currentBoard,
        setCurrentBoard,
        getLists,
        currentLists,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  return useContext(BoardContext);
};
