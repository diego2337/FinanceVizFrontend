import React from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../firebase";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const token = await result.user?.getIdToken();
      console.log("Token:", token);
      navigate("/landing");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
