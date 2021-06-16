import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const instance = axios.create({ baseURL: API_BASE });

export const login = async (email: string, password: string) => {
  const res = await instance.post("/user/login.php", {
    email,
    password
  });
  console.log("res", res.data);
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
