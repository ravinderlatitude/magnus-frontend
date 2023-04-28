import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ICclose from "../assets/images/ICclose.svg";
import ic_cross from "../assets/images/ic_cross.svg";
import useOutsideClick from "../hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";

import { loginAPI } from "../../apiServices/services";

export default function ModalLogin({ isModal, setIsModal }) {
  const modelRef = useRef(null);
  const [isModalForgot, setIsModalForgot] = useState(false);

  // for Modal
  const modalOpen = (event) => {
    setIsModalForgot(!isModalForgot);
    setIsModal(!isModal);
    console.log(isModalForgot, "Forgormodal");
  };

  const modalClose = (event) => {
    setIsModalForgot(false);
    setIsModal(false);
    console.log(isModalForgot, "modal");
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

  // useEffect(() => {
  //   // if (!isValidEmail(e.target.value)) {
  //   // } else {
  //   //   setError(auth?.message);
  //   //   setIsModal(true);
  //   // }
  //   // if (auth) {
  //   //   // modalClose();
  //   // }
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
                      <span className="error-message">{emailError}</span>
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
                  {passwordError && (
                    <span className="error-message">{passwordError}</span>
                  )}
                  {error && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {auth?.message}
                    </span>
                  )}
                  <div className="w-100 text-end">
                    <Link href="/" className="modal-links" onClick={modalOpen}>
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="">
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
                <h2>Forgot Password?</h2>
                <div>
                  <input
                    type="name"
                    value=""
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="w-100 text-end">
                  <Link href="/" className="modal-links" onClick={modalOpen}>
                    Go Back to Login
                  </Link>
                </div>

                <div className="">
                  <button className="btn btn-orange-color border-0">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
