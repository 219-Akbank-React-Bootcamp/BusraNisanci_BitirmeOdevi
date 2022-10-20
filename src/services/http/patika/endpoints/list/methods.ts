import service from "../../instance";
import { ListRequestPayload } from "./types";

export const list = (payload: ListRequestPayload) =>
  service.post("list", payload);

export const getListAll = () => service.get("list");

export const getListById = (id: number) => service.get(`list/?id=${id}`);

export const updateList = (payload: ListRequestPayload) =>
  service.put(`list/${payload.boardId}?id=${payload.boardId}`, {
    title: payload.title,
    order: payload.order,
  });
