import http from "../Services/httpService";
import auth from "./authService";

async function register(user) {
  const data = {
    name: user.name,
    email: user.username,
    password: user.password,
  };
  const { headers } = await http.post("http://localhost:8000/api/users", data);
  auth.loginWithJwt(headers["x-auth-token"]);
}

export default {
  register,
};
