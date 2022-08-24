import http from "../Services/httpService";
import auth from "./authService";
import config from "../config.json";

const userApi = config.apiEndpoint + "/users";

async function register(user) {
  const data = {
    name: user.name,
    email: user.username,
    password: user.password,
  };
  const { headers } = await http.post(userApi, data);
  auth.loginWithJwt(headers["x-auth-token"]);
}

export default {
  register,
};
