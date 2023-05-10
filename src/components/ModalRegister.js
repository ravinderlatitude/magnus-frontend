import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ICclose from "../assets/images/ICclose.svg";
import useOutsideClick from "../hooks/useOutsideClick";

import { rgisterAPI } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";

export default function ModalRegister({ isModal, setIsModal }) {
  // for Modal
  const modalClick = (event) => {
    setIsModal((current) => !current);
  };

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
    </div>
  );
}
