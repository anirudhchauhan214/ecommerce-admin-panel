import axios from "axios";

const token = localStorage.getItem("token");

export const UserApi = {
  login: (data) => {
    return axios.post("/signin", data);
  },
  register: (data) => {
    return axios.post("/register", data);
  },
  getAllUsers: () => {
    return axios.get("/users", { headers: { Authorization: "Bearer " + token } });
  },
  updateUser: (uId, data) => {
    return axios.put("/users/" + uId, data, { headers: { Authorization: "Bearer" + token } });
  },
};
