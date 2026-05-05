import type { NicknameChangeResponse, ValidNicknameResponse } from "@/types";
import { client } from "../api/client";

const MEMBER_BASE = "api/member";

export const validNickname = async (nickname: string): Promise<ValidNicknameResponse> => {
  const encodedNickname = encodeURIComponent(nickname.trim());
  console.log(encodedNickname);
  const res = await client.get(`${MEMBER_BASE}/valid-nickname?nickname=${encodedNickname}`);
  console.log(res.data);
  return res.data;
};

export const nickNameChange = async (newNickname: string): Promise<NicknameChangeResponse> => {
  const normalizedNickname = newNickname.trim();
  const res = await client.patch(`${MEMBER_BASE}/nickname-change`, { new_nickname: normalizedNickname });
  console.log(res.data);
  return res.data;
};