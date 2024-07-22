import { CapacitorHttp } from "@capacitor/core";

export const $http = async (
  url,
  options = {
    method: "GET",
    headers: {},
    params: {},
  }
) => {
  try {
    const response = await CapacitorHttp.request({ url, ...options });

    return response.data;
  } catch (error) {
    throw error;
  }
};
