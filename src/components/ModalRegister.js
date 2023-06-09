import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ICclose from "../assets/images/ICclose.svg";
import useOutsideClick from "../hooks/useOutsideClick";

import { rgisterAPI } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";
import ModalLogin from "./../components/ModalLogin";
import ModalOtp from "./ModalOtp";
import { useRouter } from "next/router";
import { setCredentials } from "@/redux/authRegisterSlice";

export default function ModalRegister({ isModal, setIsModal }) {
  const modelRef = useRef(null);
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalOTP, setIsModalOTP] = useState(false);

  // for Modal
  const modalClick = (event) => {
    setIsModal((current) => !current);
  };

  const modalOpen = (event) => {
    setIsModalLogin(!isModalLogin);
    setIsModal(!isModal);
    // console.log(isModalLogin, "isModalLogin");
  };

  const modalClose = (event) => {
    setIsModalLogin(false);
    setIsModal(false);
    // console.log(isModalLogin, "modal");
  };
  useOutsideClick(modelRef, modalClose);

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const authRegister = useSelector((state) => state.authRegister.user);
  const router = useRouter();
  const { id } = router.query;

  // const authRegisterstatus = useSelector((state) => state.authRegister.status);

  const handleFirstName = (event) => {
    const { value } = event.target;
    setFirstName(value);
  };

  const handleLastName = (event) => {
    const { value } = event.target;
    setLastName(value);
  };
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

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      rgisterAPI({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        confirm_password: confirmPassword,
      })
    );

    // validatePassword();
    setError(authRegister?.message);

    // setEmail(e.target.value);
  };

  useEffect(() => {
    console.log(authRegister);
    if (authRegister?.status === 200 && authRegister?.data?.verify_key) {
      setIsModal(false);
      dispatch(setCredentials(null));
      // let data = undefined;
      if (id) {
        router.push(
          `/test-detail/${encodeURIComponent(id)}?verifiedregister=${
            authRegister?.data?.verify_key
          }`
        );
      } else {
        router.push(`?verifiedregister=${authRegister?.data?.verify_key}`);
      }
    }
  }, [authRegister]);
  const isSubmitDisabled =
    password === "" || confirmPassword === "" || validatePassword();

  return (
    <div>
      {isModal ? (
        <div className="modal-bg-overlay" onClick={modalClick}>
          <div
            className={" " + (!isModal ? "d-none" : "d-flex")}
            id="exampleModal"
            tabindex="-1"
          >
            <div className="modal-main" onClick={modalClick}>
              <span className="modal-close" onClick={modalClick}>
                <Image src={ICclose} alt="" />
              </span>
              <h2>Register</h2>
              <form onSubmit={handleSubmit}>
                <div class="row">
                  <div className="col-12 col-md-6 pe-md-1">
                    <input
                      type="name"
                      value={firstName}
                      placeholder="First name"
                      className="form-control"
                      onChange={handleFirstName}
                    />
                    {error && (
                      <span className="">{authRegister?.first_name}</span>
                    )}
                  </div>
                  <div className="col-12 col-md-6 ps-md-1">
                    <input
                      type="name"
                      value={lastName}
                      placeholder="Last name"
                      className="form-control"
                      onChange={handleLastName}
                    />
                    {error && (
                      <span className="">{authRegister?.last_name}</span>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="name"
                    value={email}
                    placeholder="Email"
                    className="form-control"
                    onChange={handleEmailChange}
                  />
                </div>
                {emailError && (
                  <span className="error-message">{emailError}</span>
                )}
                <div>
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    className="form-control"
                    onChange={handlePasswordChange}
                  />
                  {passwordError && (
                    <span className="error-message">{passwordError}</span>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    className="form-control"
                    onChange={handleConfirmPasswordChange}
                  />
                  {error && (
                    <span className="error-message">
                      {authRegister?.confirmPasswordError}
                    </span>
                  )}
                  {error && (
                    <span className="error-message">
                      {authRegister?.confirm_password}
                    </span>
                  )}
                </div>
                <span className="error-message">{authRegister?.message}</span>
                <div className="w-100 text-end">
                  <button className="modal-links" onClick={modalOpen}>
                    Back to Login
                  </button>
                </div>
                <div className="">
                  <button
                    className="btn btn-orange-color border-0"
                    type="submit"
                    disabled={isSubmitDisabled}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      <ModalLogin isModal={isModalLogin} setIsModal={setIsModalLogin} />
      <ModalOtp isModal={isModalOTP} setIsModal={setIsModalOTP} />
    </div>
  );
}
