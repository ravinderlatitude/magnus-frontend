import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ICclose from "../assets/images/ICclose.svg";
import useOutsideClick from "../hooks/useOutsideClick";

import { VerifyUserAPI } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function ModalOtp({ isModal, setIsModal }) {
  // for Modal
  const modalClick = (event) => {
    setIsModal((current) => !current);
  };

  const dispatch = useDispatch();
  const [verify_key, setVerify_key] = useState(null);
  const [verificationCode, setVerificationCode] = useState(null);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const verifyUser = useSelector((state) => state.verifyUser.user);
  const router = useRouter();
  const { verifiedregister } = router.query;

  const handleVerify = (event) => {
    const { value } = event.target;
    setVerificationCode(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      VerifyUserAPI({
        verify_key: verifiedregister,
        verification_code: verificationCode,
      })
    );
    setError(verifyUser?.message);
  };
  // console.log(first);

  return (
    <div>
      {isModal ? (
        <div className="modal-bg-overlay">
          <div
            className={" " + (!isModal ? "d-none" : "d-flex")}
            id="exampleModal"
            tabindex="-1"
          >
            <div className="modal-main">
              <span className="modal-close" onClick={modalClick}>
                <Image src={ICclose} alt="" />
              </span>
              <h2>Enter OTP</h2>
              <form onSubmit={handleSubmit}>
                <div class="row">
                  <div className="col-12 col-md-12 pe-md-1">
                    <input
                      type="name"
                      value={verificationCode}
                      placeholder="Enter OTP Code"
                      className="form-control"
                      onChange={handleVerify}
                    />
                    <span className="errorMessage">{verifyUser?.message}</span>
                    {error && (
                      <span className="errorMessage">
                        {verifyUser?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="">
                  <button
                    className="btn btn-orange-color border-0"
                    type="submit"
                  >
                    Verify Now
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
