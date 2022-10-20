import service from "../../instance";
import { CardRequestPayload } from "./types";

export const card = (payload: CardRequestPayload) =>
  service.post("card", payload);

export const getCardAll = () => service.get("card");

export const getCardId = (id: number) => service.get(`card/?id=${id}`);

export const updateCard = (payload: CardRequestPayload) =>
  service.put(`card/${payload.listId}?id=${payload.listId}`, {
    title: payload.title,
    description: payload.description,
    duedate: payload.duedate,
    order: payload.order,
  });
