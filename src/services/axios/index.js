import axios from "axios";

export const instance = axios.create({
   baseURL: "https://nola-dev.onrender.com/api",
  // baseURL: "https://nola-be.azurewebsites.net/api",
});

export const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    instance.defaults.headers.common.Authorization = "";
  },
};
