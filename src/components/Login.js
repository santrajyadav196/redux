import React from "react";
import {useDispatch} from "react-redux";
import {login, logout} from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({name: "santraj", email: "santrajyadav@gmail.com", age: 29})
          );
        }}>
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}>
        Logout
      </button>
    </div>
  );
}

export default Login;
