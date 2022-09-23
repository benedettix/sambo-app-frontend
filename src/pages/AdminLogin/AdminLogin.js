import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Directions from "../../components/Directions/Directions";
import { setLoader } from "../../Redux/features/loaderSlice/loaderSlice";
import { setAdmin } from "../../Redux/features/loginSlice/loginSlice";
import blogServices from "../../services/blogServices";
import "./AdminLogin.scss";
var CryptoJS = require("crypto-js");
function AdminLogin() {
  const [state, setState] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function setPassword(password) {
    var ciphertext = CryptoJS.AES.encrypt(
      password.password,
      "secret key 123"
    ).toString();
    setState({ ...state, ["password"]: ciphertext });
  }

  const onLogin = (e) => {
    e.preventDefault();

    const fetchComments = async () => {
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.adminLogin(state);

        if (response[0]) {
          let adminObj = {
            username: response[0].username,
          };
          localStorage.setItem("adminOn", JSON.stringify(adminObj));
          dispatch(setAdmin(adminObj));
          navigate("/");
          //LOCAL STORAGE NAPRAVIT
        }
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };
    fetchComments();
  };

  return (
    <>
      <Directions direction={"Admin Login"} />
      <div className="container admin_login-wrapper">
        <h1>Login</h1>
        <div className="col-6 offset-3">
          <input
            type="text"
            placeholder="name"
            onChange={(event) =>
              setState({ ...state, username: event.target.value })
            }
            className="form-control"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => setPassword({ password: event.target.value })}
            className="form-control"
          />
          <br />
          <button onClick={(e) => onLogin(e)} className="btn btn-admin">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
