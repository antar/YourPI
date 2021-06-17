import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { IUser } from "../lib/types";
import { AuthState } from "../redux/reducers/authReducer";
import { RootState } from "../redux/reducers/rootReducer";

export default function useAuthProtecton(): [IUser | undefined, boolean] {
  const history = useHistory();

  const authState = useSelector<RootState, AuthState>((state) => state.auth);

  useEffect(() => {
    if (!authState.isLoading && !authState.user) history.push("/login");
  }, [authState, history]);

  return [authState.user, authState.isLoading];
}
