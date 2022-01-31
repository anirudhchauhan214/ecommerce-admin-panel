import axios from "axios";

export const UserApi = {
  login: (data) => {
    return axios.post("/signin", data);
  },
  register: (data) => {
    return axios.post("/register", data);
  },
  getAllUsers: (token) => {
    return axios.get("/users", { headers: { Authorization: "Bearer " + token } });
  },
  updateUser: (id, data, token) => {
    return axios.put("/users/" + id, data, { headers: { Authorization: "Bearer " + token } });
  },
  deleteUser: (id, token) => {
    return axios.delete("/users/" + id, { headers: { Authorization: "Bearer " + token } });
  },
};
