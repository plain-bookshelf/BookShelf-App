import axios from "axios";
import { AI_BASE_URL } from "@env";

export const aiClient = axios.create({
  timeout: 60000,
});
