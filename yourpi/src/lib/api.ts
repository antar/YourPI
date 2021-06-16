import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const instance = axios.create({ baseURL: API_BASE });

let jwt = null;

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const { data } = await instance.post("/user/login.php", {
    email,
    password
  });
  if (data.jwt) {
    jwt = data.jwt;
    return data.jwt;
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
