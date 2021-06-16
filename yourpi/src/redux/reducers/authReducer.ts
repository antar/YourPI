import { setToken } from "../../lib/api";

export interface AuthState {
  token?: string;
  isLoggedIn: boolean;
}

const initialToken = localStorage.getItem("token") || undefined;

const initialState: AuthState = {
  token: initialToken,
  isLoggedIn: Boolean(initialToken)
};

type AuthReducerAction = { type: "SET_TOKEN"; payload?: string };

export default function authReducer(
  state = initialState,
  action: AuthReducerAction
) {
  switch (action.type) {
    case "SET_TOKEN":
      setToken(action.payload);
      if (action.payload) localStorage.setItem("token", action.payload);
      else localStorage.removeItem("token");
      return {
        ...state,
        token: action.payload,
        isLoggedIn: Boolean(action.payload)
      };
    default:
      return state;
  }
}
