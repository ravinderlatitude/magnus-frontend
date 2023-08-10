import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ICclose from "../assets/images/ICclose.svg";
import useOutsideClick from "../hooks/useOutsideClick";

import { rgisterAPI } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";
import ModalLogin from "./../components/ModalLogin";
import ModalOtp from "./ModalOtp";
import { useRouter } from "next/router";
import { setCredentials } from "@/redux/authRegisterSlice";
import { Input } from "./Input";
import { registerValidation } from "@/utils/form";
import { ThreeDots } from "react-loader-spinner";

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
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const { user: authRegister, status } = useSelector(
    (state) => state.authRegister
  );
  const router = useRouter();
  const { id } = router.query;

  // const authRegisterstatus = useSelector((state) => state.authRegister.status);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]:
        name == "confirm_password"
          ? registerValidation(name, value, formData.password)
          : registerValidation(name, value),
    });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(formData).forEach((name) => {
      const error =
        name == "confirm_password"
          ? registerValidation(name, formData[name], formData.password)
          : registerValidation(name, formData[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (Object.keys(validationErrors).length === 0) {
      dispatch(rgisterAPI(formData));
    }
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
              <h2>Register</h2>
              <form onSubmit={handleSubmit}>
                <div class="row">
                  <div className="col-12 col-md-6 pe-md-1">
                    <Input
                      type="name"
                      name={"first_name"}
                      value={formData.first_name}
                      placeholder="First name"
                      onChange={handleChange}
                      error={errors?.first_name}
                    />
                  </div>
                  <div className="col-12 col-md-6 ps-md-1">
                    <Input
                      type="name"
                      name={"last_name"}
                      value={formData.last_name}
                      placeholder="Last name"
                      onChange={handleChange}
                      error={errors?.last_name}
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="name"
                    name={"email"}
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    error={errors?.email}
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    name={"password"}
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    error={errors?.password}
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    name={"confirm_password"}
                    value={formData.confirm_password}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    error={errors?.confirm_password}
                  />
                </div>
                <div className="w-100 text-end">
                  <button
                    type="button"
                    className="modal-links"
                    onClick={modalOpen}
                  >
                    Back to Login
                  </button>
                </div>
                <div className="">
                  <button
                    className="btn btn-orange-color border-0"
                    type="submit"
                    disabled={status == "loading"}
                  >
                    {status == "loading" ? (
                      <ThreeDots
                        height="24"
                        width="65"
                        color="#FFF"
                        wrapperClass="register-loading"
                      />
                    ) : (
                      "Register"
                    )}
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
