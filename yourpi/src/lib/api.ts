import axios from "axios";
import store from "../redux/store";

const API_BASE = process.env.REACT_APP_API_BASE;

let instance = axios.create({ baseURL: API_BASE });

// This function is called by the store to set the token to the axios instance.
// DO NOT USE IN THIS FILE
export const setToken = (token?: string) => {
  instance = axios.create({
    baseURL: API_BASE,
    headers: {
      authorization: `Bearer ${token}`
    }
  });
};

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const { data } = await instance.post("/user/login.php", {
    email,
    password
  });
  if (data.jwt) {
    const { jwt } = data;
    store.dispatch({ type: "SET_TOKEN", payload: jwt });
    return jwt;
  }
  throw new Error("Error while logging in!");
};

export const signUp = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  const res = await instance.post("/user/create_user.php", {
    firstname,
    lastname,
    email,
    password
  });
  console.log("res", res.data);
};
