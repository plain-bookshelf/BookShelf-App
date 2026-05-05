import { LendingResponse } from "@/types";
import { client } from "../api/client";

const LENDING_BASE = "api";

export const rental = async (bookId: number): Promise<LendingResponse> => {
  const res = await client.post(`${LENDING_BASE}/${bookId}/rental`);
  console.log(res.data);
  return res.data;
};

export const reservation = async (bookId: number): Promise<LendingResponse> => {
  const res = await client.post(`${LENDING_BASE}/${bookId}/reservation`);
  console.log(res.data);
  return res.data;
};