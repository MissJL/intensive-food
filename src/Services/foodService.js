import http from "../Services/httpService";
import config from "../config.json";

const foodsApi = config.apiEndpoint + "/foods";

export function getFoods() {
  return http.get(foodsApi);
}

export function getFood(foodId) {
  return http.get(foodsApi + "/" + foodId);
}

export function saveFood(food) {
  //update food
  if (food._id) {
    const originalFood = { ...food };
    delete originalFood._id;
    return http.put(foodsApi + "/" + food._id, originalFood);
  }
  return http.post(foodsApi, food);
  //save a new food
}

export function deleteFood(foodId) {
  return http.delete(foodsApi + "/" + foodId);
}
