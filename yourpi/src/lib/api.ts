import axios from "axios";

const API_BASE = "https://tracker.wes.fm/REST-API-PHP/api";

const instance = axios.create({ baseURL: API_BASE });

export const login = async (email: string, password: string) => {
  const res = await instance.post("/login.php", {
    email,
    password
  });
  console.log("res", res);
};
