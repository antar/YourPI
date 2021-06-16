import { introspect, setToken } from "../../lib/api";
import { IUser } from "../../lib/types";
import store from "../store";

export interface AuthState {
  token?: string;
  isLoading: boolean;
  user?: IUser;
}

const initialToken = localStorage.getItem("token") || undefined;

const initialState: AuthState = {
  token: initialToken,
  isLoading: Boolean(initialToken)
};

type AuthReducerAction =
  | { type: "SET_TOKEN"; payload?: string }
  | { type: "SET_USER"; payload?: IUser };

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
        user: action.payload ? state.user : undefined
      };
    case "SET_USER":
      return { ...state, isLoading: false, user: action.payload };
    default:
      return state;
  }
}

setTimeout(async () => {
  if (initialToken) {
    const auth = await introspect();
    store.dispatch({ type: "SET_USER", payload: auth.data });
  }
});
