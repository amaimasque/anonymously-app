import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL ?? "http://localhost:5000";

const axiosClient = axios.create({
  baseURL,
});

const authenticatedAxios = axios.create({
  baseURL,
});

authenticatedAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("access="))
      ?.split("=")[1]
  }`;
  return config;
});

const loginUser = async (data) => {
  return axiosClient.post("/users/login", data, {
    withCredentials: true,
  });
};

const logoutUser = async () =>
  axiosClient.post("/users/logout", null, {
    withCredentials: true,
    credentials: "include",
  });

const createNewPost = async (data) =>
  authenticatedAxios.post("/posts", data, {
    headers: {
      "Content-Type": "multipart/form-data;",
    },
  });

const getPosts = async () => authenticatedAxios.get("/posts");

export { loginUser, logoutUser, createNewPost, getPosts };
