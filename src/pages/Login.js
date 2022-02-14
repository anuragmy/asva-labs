import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../action";
import firebase from "./../config";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log("🚀 ~ file: Login.js ~ line 13 ~ .then ~ res", res);
        const data = {
          name: res.user.displayName,
          email: res.user.email,
          token: res.credential.accessToken,
        };
        dispatch(auth(data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%) ",
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,108,121,1) 41%, rgba(0,212,255,1) 100%)",
      }}
    >
      <button onClick={signIn}>Google Signin</button>
    </div>
  );
};

export default Login;
