import http from "../Services/httpService";
// import apiEndpoint from "../config.json";

// const apiUrl = apiEndpoint + "/foods";

// function movieUrl(id) {
//   return `${apiUrl}/${id}`;
// }

export function getFoods() {
  return http.get("http://localhost:8000/api/foods");
}

export function getFood(foodId) {
  return http.get("http://localhost:8000/api/foods/" + foodId);
}

export function saveFood(food) {
  //update food
  if (food._id) {
    const originalFood = { ...food };
    delete originalFood._id;
    return http.put(
      " http://localhost:8000/api/foods/" + food._id,
      originalFood
    );
  }
  return http.post("http://localhost:8000/api/foods", food);
  //save a new food
}

export function deleteFood(foodId) {
  return http.delete("http://localhost:8000/api/foods/" + foodId);
}
