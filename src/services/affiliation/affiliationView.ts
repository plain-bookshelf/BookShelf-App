import type { AffiliationViewResult } from "@/types";
import { client } from "../api/client";

const AFFILIATION_VIEW_PATH = "affiliation";

export const getAffiliationView = async (): Promise<AffiliationViewResult> => {
  const res = await client.get(`${AFFILIATION_VIEW_PATH}/view`);
  console.log(res.data);
  return res.data;
};