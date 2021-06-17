import axios from "axios";
import store from "../redux/store";
import { IIntrospectResponse } from "./types";

const API_BASE = process.env.REACT_APP_API_BASE;

let instance = axios.create({ baseURL: API_BASE });

// This function is called by the store to set the token to the axios instance.
// DO NOT USE IN THIS FILE
export const setToken = (newToken?: string) => {
  instance = axios.create({
    baseURL: API_BASE,
    headers: {
      authorization: `Bearer ${newToken}`
    }
  });
};

export const getToken = () => {
  return store.getState().auth.token;
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
    const auth = await introspect();
    store.dispatch({ type: "SET_USER", payload: auth.data });
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
  return res.data.message === "User was created.";
};

export const introspect = async (): Promise<IIntrospectResponse> => {
  const res = await instance.post<IIntrospectResponse>(
    "/user/validate_token.php",
    {
      jwt: getToken()
    }
  );
  if (res.data.message !== "Access granted.")
    throw new Error("Error during introspect!");
  return res.data;
};

export const updateUser = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string
): Promise<string> => {
  const { data } = await instance.post("/user/update_user.php", {
    jwt: getToken(),
    firstname,
    lastname,
    email,
    password
  });
  if (data.jwt) {
    const { jwt } = data;
    store.dispatch({ type: "SET_TOKEN", payload: jwt });
    const auth = await introspect();
    store.dispatch({ type: "SET_USER", payload: auth.data });
    return jwt;
  }
  throw new Error("Error while logging in!");
};
