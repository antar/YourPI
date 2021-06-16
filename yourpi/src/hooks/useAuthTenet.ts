import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AuthState } from "../redux/reducers/authReducer";
import { RootState } from "../redux/reducers/rootReducer";

export default function useAuthTenet() {
  const history = useHistory();

  const isLoggedIn = useSelector<RootState, AuthState["isLoggedIn"]>(
    (state) => state.auth.isLoggedIn
  );

  useEffect(() => {
    if (isLoggedIn) history.push("/");
  }, [isLoggedIn, history]);
}
