import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "./../services/userServices";
import { Toast } from "./../utils/Toast";

const Login = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState(false);
  const regfullname = useRef();
  const regEmail = useRef();
  const regPassword = useRef();
  const email = useRef();
  const password = useRef();
  const handleLogin = (event) => {
    const inputs = {
      username: email.current.value,
      password: password.current.value,
    };
    loginUser(inputs)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("login", JSON.stringify(data.accessToken));
        Toast("Login Successfuly!", "success");
        navigate("/");
      })
      .catch(({ response }) => {
        Toast(response.data, "error");
      });
  };
  const handleSignup = (event) => {
    const inputs = {
      fullname: regfullname.current.value,
      username: regEmail.current.value,
      password: regPassword.current.value,
    };
    if (
      inputs.fullname === "" ||
      inputs.username === "" ||
      inputs.password === ""
    ) {
      Toast("All fields must be filled", "error");
      return;
    }
    signupUser(inputs)
      .then((res) => {
        Toast("Signup was successfully,you can login now.", "success");
        setSignup(false);
      })
      .catch(({ response }) => {
        Toast(response.data, "error");
      });
  };
  const signUp = (
    <div className="signup-wrap p-4 p-lg-5">
      <div className="d-flex">
        <div className="w-100">
          <h3 className="mb-4">Sign Up</h3>
        </div>
        <div className="w-100">
          <p className="social-media d-flex justify-content-end">
            <a
              href="/#"
              className="social-icon d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-facebook"></span>
            </a>
            <a
              href="/#"
              className="social-icon d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-twitter"></span>
            </a>
          </p>
        </div>
      </div>
      <div className="signin-form">
        <div className="form-group mb-3">
          <label className="label" htmlFor="fullname">
            Fullname
          </label>
          <input
            type="text"
            className="form-control"
            ref={regfullname}
            placeholder="fullname"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="label" htmlFor="Email">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            ref={regEmail}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            ref={regPassword}
            required
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="form-control btn btn-primary submit px-3"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
  const login = (
    <div className="login-wrap p-4 p-lg-5">
      <div className="d-flex">
        <div className="w-100">
          <h3 className="mb-4">Sign In</h3>
        </div>
        <div className="w-100">
          <p className="social-media d-flex justify-content-end">
            <a
              href="/#"
              className="social-icon d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-facebook"></span>
            </a>
            <a
              href="/#"
              className="social-icon d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-twitter"></span>
            </a>
          </p>
        </div>
      </div>
      <div className="signin-form">
        <div className="form-group mb-3">
          <label className="label" htmlFor="fullname">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            ref={email}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            ref={password}
            required
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="form-control btn btn-primary submit px-3"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ marginTop: "-50px" }}
          >
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div className="text w-100">
                    <h2>Welcome to Seafloor</h2>
                    <p>
                      {signup
                        ? "Login your account."
                        : "Don't have an account?"}
                    </p>
                    <button
                      onClick={() => {
                        setSignup(!signup);
                      }}
                      className="btn btn-white btn-outline-white"
                    >
                      {!signup ? "Sign Up" : "Login"}
                    </button>
                  </div>
                </div>
                {signup ? signUp : login}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
