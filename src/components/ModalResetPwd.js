import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ICclose from "../assets/images/ICclose.svg";

import { ResetPwdAPI } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Input } from "./Input";
import { resetPasswordValidation } from "@/utils/form";
import { ThreeDots } from "react-loader-spinner";

export default function ModalResetPwd({ isModal, setIsModal }) {
  // for Modal
  const modalClick = (event) => {
    setIsModal((current) => !current);
  };

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    otp: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({
    otp: "",
    password: "",
    confirm_password: "",
  });

  const { user: authResetPwd, status } = useSelector(
    (state) => state.authResetPwd
  );

  const router = useRouter();
  const { resetkey, resetcode } = router.query;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]:
        name == "confirm_password"
          ? resetPasswordValidation(name, value, formData.password)
          : resetPasswordValidation(name, value),
    });
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (resetcode) {
      handleChange({ target: { name: "otp", value: resetcode } });
    }
  }, [resetcode]);

  useEffect(() => {
    if (authResetPwd?.status == 200) {
      modalClick();
      router.push("/");
    }
  }, [authResetPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(formData).forEach((name) => {
      const error =
        name == "confirm_password"
          ? resetPasswordValidation(name, formData[name], formData.password)
          : resetPasswordValidation(name, formData[name]);
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
        ResetPwdAPI({
          verify_key: resetkey,
          verification_code: formData.otp,
          password: formData.password,
        })
      );
    }
  };

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
              <h2>Reset Password</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <Input
                    type="name"
                    name={"otp"}
                    value={formData.otp}
                    placeholder="Enter OTP"
                    onChange={handleChange}
                    maxLength={6}
                    error={errors?.otp}
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    name={"password"}
                    value={formData.password}
                    placeholder="New Password"
                    onChange={handleChange}
                    error={errors?.password}
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    name={"confirm_password"}
                    value={formData.confirm_password}
                    placeholder="Confirm New Password"
                    onChange={handleChange}
                    error={errors?.confirm_password}
                  />
                </div>
                <div className="">
                  <button
                    className="btn btn-orange-color border-0"
                    disabled={status == "loading"}
                  >
                    {status == "loading" ? (
                      <ThreeDots
                        height="24"
                        width="56"
                        color="#FFF"
                        wrapperClass="forgotpassword-loading"
                      />
                    ) : (
                      "Submit"
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
