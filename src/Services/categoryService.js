import http from "./httpService";
// import config from "../config.json";

export function getCategories() {
  return http.get("http://localhost:8000/api/categories");
}

export function getCategory() {
  return http.get("http://localhost:8000/api/categories/:id");
}
