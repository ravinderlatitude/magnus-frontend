import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ICclose from "../assets/images/ICclose.svg";

import { VerifyUserAPI } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import { otpValidation } from "@/utils/form";
import { Input } from "./Input";

export default function ModalOtp({ isModal, setIsModal }) {
  // for Modal
  const modalClick = (event) => {
    setIsModal((current) => !current);
  };

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    otp: "",
  });
  const [errors, setErrors] = useState({
    otp: "",
  });
  const { user: verifyUser, status } = useSelector((state) => state.verifyUser);
  const router = useRouter();
  const { verifiedregister } = router.query;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: otpValidation(name, value),
    });
    setFormData({ ...formData, [name]: value });
  };

  const handleVerify = (event) => {
    const { value } = event.target;
    setVerificationCode(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(formData).forEach((name) => {
      const error = otpValidation(name, formData[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (Object.keys(validationErrors).length === 0) {
      dispatch(
        VerifyUserAPI({
          verify_key: verifiedregister,
          verification_code: formData.otp,
        })
      );
    }
  };

  const resendOtp = async (e) => {};

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
                    <Input
                      type="name"
                      name={"otp"}
                      value={formData.otp}
                      placeholder="Enter OTP Code"
                      onChange={handleChange}
                      maxLength={6}
                      error={errors?.otp}
                    />
                  </div>
                </div>
                {/* <div className="w-100 text-end">
                  <button
                    type="button"
                    className="modal-links"
                    onClick={resendOtp}
                  >
                    Resend OTP
                  </button>
                </div> */}

                <div className="">
                  <button
                    className="btn btn-orange-color border-0"
                    type="submit"
                    disabled={status == "loading"}
                  >
                    {status == "loading" ? (
                      <ThreeDots
                        height="24"
                        width="85"
                        color="#FFF"
                        wrapperClass="otp-loading"
                      />
                    ) : (
                      "Verify Now"
                    )}
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
