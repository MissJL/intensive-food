import http from "./httpService";
import config from "../config.json";

export function getCategories() {
  return http.get(config.apiEndpoint + "/categories");
}

export function getCategory() {
  return http.get(config.apiEndpoint + "/categories/:id");
}
