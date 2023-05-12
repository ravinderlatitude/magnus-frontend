import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ICclose from "../assets/images/ICclose.svg";
import useOutsideClick from "../hooks/useOutsideClick";

import { ResetPwdAPI } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function ModalResetPwd({ isModal, setIsModal }) {
  // for Modal
  const modalClick = (event) => {
    setIsModal((current) => !current);
  };

  const dispatch = useDispatch();

  const [otp, setOtp] = useState(null);
  const [verificationcode, setVerificationcode] = useState(null);
  const [otpError, setOtpError] = useState("");
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState(null);

  const authResetPwd = useSelector((state) => state.authResetPwd.user);

  // console.log("authResetPwd==============", authResetPwd);
  const router = useRouter();
  const { resetpassword } = router.query;
  // console.log(resetpassword);

  const handleOTPChange = (event) => {
    const { value } = event.target;
    setOtp(value);

    // OTP validation
    const otpRegex = /[0-9a-zA-Z]{6,}/;
    if (!otpRegex.test(value)) {
      setOtpError("OTP is an Invalid");
    } else {
      setOtpError("");
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
      return "Passwords not match";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      ResetPwdAPI({
        verify_key: resetpassword,
        verification_code: otp,
        password: password,
      })
    );
    // validatePassword();

    setError(authResetPwd?.message);

    // setEmail(e.target.value);
  };
  useEffect(() => {
    console.log(authResetPwd);
  }, [authResetPwd]);
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
              <h2>Reset Password</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    value={otp}
                    placeholder="Enter OTP"
                    className="form-control"
                    onChange={handleOTPChange}
                  />
                  {otpError && (
                    <span className="errorMessage">
                      {authResetPwd?.setOtpError}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    value={password}
                    placeholder="New Password"
                    className="form-control"
                    onChange={handlePasswordChange}
                  />
                  {passwordError && (
                    <span className="errorMessage">{passwordError}</span>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm New Password"
                    className="form-control"
                    onChange={handleConfirmPasswordChange}
                  />
                  {error && (
                    <span className="errorMessage">
                      {authResetPwd?.confirmPasswordError}
                    </span>
                  )}
                  {error && (
                    <span className="errorMessage">
                      {authResetPwd?.confirm_password}
                    </span>
                  )}
                </div>
                <span className="errorMessage">{authResetPwd?.message}</span>
                <div className="">
                  <button
                    className="btn btn-orange-color border-0"
                    type="submit"
                    disabled={isSubmitDisabled}
                  >
                    Submit
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
