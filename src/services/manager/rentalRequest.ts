import EventSource from "react-native-sse";
import { API_BASE_URL } from "@env";

type RentalRequestStreamEvent =
  | "sse-connect"
  | "rental-request-snapshot";

const RENTAL_REQUEST_STREAM_PATH = "manager/rentalRequestCheck";

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
