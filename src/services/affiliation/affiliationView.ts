import { aiClient } from "../ai/client";
import { API_BASE_URL } from "@env";
import type { AffiliationViewResult } from "@/types";

const AFFILIATION_VIEW_PATH = "affiliation/";

export const getAffiliationView = async (): Promise<AffiliationViewResult> => {
  const res = await aiClient.get(`${API_BASE_URL}${AFFILIATION_VIEW_PATH}view`);
  console.log(res.data);
  return res.data;
};