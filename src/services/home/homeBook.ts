import { client, platformType } from "../api/client";
import type { BookFindType, HomeBookResponse } from "@/types";

const HOME_BASE = "main";

export const  getHomeBook = async (
  bookFindType: BookFindType,
): Promise<HomeBookResponse> => {
  const res = await client.get(`${HOME_BASE}/book${platformType}&bookFindType=${bookFindType}&page=0&size=99`);
  console.log(res.data);
  return res.data;
};
