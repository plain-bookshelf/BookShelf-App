import EventSource from "react-native-sse";
import { API_BASE_URL } from "@env";
import { client } from "../api/client";
import type { RentalRequestApprovalResponse } from "@/types";

type RentalRequestStreamEvent =
  | "sse-connect"
  | "rental-request-snapshot";

const RENTAL_REQUEST_STREAM_PATH = "manager/rentalRequestCheck";
const RENTAL_REQUEST_APPROVAL_PATH = "api/manager/approve";

const getStreamUrl = () => {
  const baseUrl = API_BASE_URL.replace(/\/$/, "");

  return `${baseUrl}/${RENTAL_REQUEST_STREAM_PATH}`;
};

export const createRentalRequestEventSource = (
  accessToken: string,
  lastEventId?: string | null,
) => {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${accessToken}`,
    "Last-Event-ID": lastEventId ?? "",
  };

  return new EventSource<RentalRequestStreamEvent>(getStreamUrl(), {
    headers,
    method: "GET",
  });
};

export const approveRentalRequest = async (
  bookDetailId: number,
): Promise<RentalRequestApprovalResponse> => {
  const res = await client.patch(
    `${RENTAL_REQUEST_APPROVAL_PATH}/${bookDetailId}`
  );
  console.log(res.data);
  return res.data;
};  
