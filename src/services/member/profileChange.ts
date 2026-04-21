import { client, platformType } from "../api/client";
import type { ProfileChangeResponse } from "@/types";

const MEMBER_BASE = "api/member";

export const profileChange = async (
  newProfileImageUrl: string,
): Promise<ProfileChangeResponse> => {
  const res = await client.patch(`${MEMBER_BASE}/profileImage-change`, { new_profile_image_url: newProfileImageUrl });
  return res.data;
};
