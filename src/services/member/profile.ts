import { client } from "../api/client";
import type {
  ProfileChangeRequest,
  ProfileChangeResponse,
  ProfileImageUrlRequest,
  ProfileImageUrlResponse,
} from "@/types";

const MEMBER_BASE = "api/member";

export const ProfileImageUrl = async (
  params: ProfileImageUrlRequest,
): Promise<ProfileImageUrlResponse> => {
  const res = await client.post(`${MEMBER_BASE}/profile-image/url`, params);
  console.log(res.data);
  return res.data;
};

export const profileChange = async (
  imageKey: string,
): Promise<ProfileChangeResponse> => {
  const params: ProfileChangeRequest = { image_key: imageKey };
  const res = await client.patch(`${MEMBER_BASE}/profile-image/change`, params);
  console.log(res.data);
  return res.data;
};
