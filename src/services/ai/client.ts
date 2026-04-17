import axios from "axios";
import { AI_BASE_URL } from "@env";

export const aiClient = axios.create({
  baseURL: AI_BASE_URL,
  timeout: 5000,
});
