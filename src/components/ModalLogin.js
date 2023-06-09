import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ICclose from "../assets/images/ICclose.svg";
import ic_cross from "../assets/images/ic_cross.svg";
import useOutsideClick from "../hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";

import { loginAPI, forgotPwdAPI } from "../../apiServices/services";
import { useRouter } from "next/router";

export default function ModalLogin({ isModal, setIsModal }) {
  const modelRef = useRef(null);
  const [isModalForgot, setIsModalForgot] = useState(false);
  // const [isModalLogin, setIsModalLogin] = useState(false);

  // for Modal
  const modalOpen = (event) => {
    setIsModalForgot(!isModalForgot);
    setIsModal(!isModal);
    // console.log(isModalForgot, "Forgormodal");
  };

  const modalClose = (event) => {
    setIsModalForgot(false);
    setIsModal(false);
    // console.log(isModalForgot, "modal");
  };
  useOutsideClick(modelRef, modalClose);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleClick = async () => {
  //   // console.log(JSON.stringify({ email, password }));

  //   // if (response.status == 200) {
  //   //   setIsModal(false);
  //   // } else {
  //   //   null;
  //   // }
  //   try {
  //     let body = JSON.stringify({ email, password });
  //     const response = await loginAPI(body);

  //     console.log("login success response=====================");
  //     console.log(response);
  //     if (response.status == 200) {
  //       modalClose();
  //     }
  //     console.log(response.data.email);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const auth = useSelector((state) => state.auth.user);
  const authForgotPwd = useSelector((state) => state.authForgotPwd.user);

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch(loginAPI({ email, password }));
  //   // setIsModal(false);
  // };

  const handleEmailChange = (event) => {
    const { value } = event.target;

    setEmail(value);

    // email validation
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    if (value.length < 1) {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);

    // password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,191}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAPI({ email, password }));
    setError(auth?.message);

    // setEmail(e.target.value);
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      forgotPwdAPI({
        // first_name: firstName,
        // last_name: lastName,

        email: email,
        // password: password,
        // confirm_password: confirmPassword,
      })
    );
    setError(authForgotPwd?.message);

    // setEmail(e.target.value);
  };

  const handleForgotPasswordEmailChange = (event) => {
    const { value } = event.target;

    setEmail(value);

    // email validation
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    if (value.length < 1) {
      setEmailError("");
    }
  };

  // useEffect(() => {
  //   dispatch(forgotPwdAPI({ email }));
  // }, [error]);
  // console.log(error, password, email, auth, ">>");

  return (
    <div>
      <div>
        {isModal ? (
          <div className="modal-bg-overlay">
            <div className={" " + (!isModal ? "d-none" : "d-flex")}>
              <div className="modal-main" ref={modelRef}>
                <span className="modal-close" onClick={modalClose}>
                  <Image src={ICclose} alt="" />
                </span>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                  {/* {status === "failed" && <div>{error}</div>} */}
                  <div>
                    <input
                      type="name"
                      value={email}
                      placeholder="Email"
                      className="form-control"
                      onChange={handleEmailChange}
                    />
                    {emailError && (
                      <span className="errorMessage">{emailError}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      value={password}
                      placeholder="Password"
                      className="form-control"
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    {passwordError && (
                      <span className="errorMessage">{passwordError}</span>
                    )}
                    {error && (
                      <span className="errorMessage">{auth?.message}</span>
                    )}
                  </div>
                  <div className="w-100 text-end">
                    <button className="modal-links" onClick={modalOpen}>
                      Forgot Password?
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn btn-orange-color border-0"
                      // onClick={handleClick}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : isModalForgot ? (
          <div className="modal-bg-overlay">
            <div className={" " + (!isModalForgot ? "d-none" : "d-flex")}>
              <div className="modal-main" ref={modelRef}>
                <span className="modal-close" onClick={modalClose}>
                  <Image src={ICclose} alt="" />
                </span>
                <form onSubmit={handleForgotPasswordSubmit}>
                  <h2>Forgot Password?</h2>
                  <div>
                    <input
                      type="name"
                      value={email}
                      placeholder="Email"
                      className="form-control"
                      onChange={handleForgotPasswordEmailChange}
                    />
                  </div>
                  <div className="d-flex">
                    {error && (
                      <span className="errorMessage">
                        {authForgotPwd?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-100 text-end">
                    <button className="modal-links" onClick={modalOpen}>
                      Go Back to Login
                    </button>
                  </div>
                  <div className="">
                    <button className="btn btn-orange-color border-0">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
