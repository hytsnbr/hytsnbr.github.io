import axiosBase from "axios";
import { JsonData } from "@/api/types";

const axios = axiosBase.create({
  baseURL: "https://raw.githubusercontent.com/hytsnbr/ShinyTest/main/result/data.json",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10 * 1000,
});

export const getRes = async (): Promise<JsonData> => {
  const response = await axios.get<JsonData>("");
  return response.data;
};
