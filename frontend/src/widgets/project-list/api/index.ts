import { config } from "@shared/config";
import { handleResponse } from "@shared/api";

export const getProjectCards = async () => {
  try {
    const url = `${config.API_URL}/projects`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Ошибка получения данных:", error);
    throw error;
  }
};
