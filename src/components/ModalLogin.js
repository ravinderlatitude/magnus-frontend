import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ICclose from "../assets/images/ICclose.svg";
import { useDispatch, useSelector } from "react-redux";

import { loginAPI, forgotPwdAPI } from "../../apiServices/services";
import { useRouter } from "next/router";
import { forgotValidation, loginValidation } from "@/utils/form";
import { Input } from "./Input";
import { ThreeDots } from "react-loader-spinner";

export default function ModalLogin({ isModal, setIsModal }) {
  const modelRef = useRef(null);
  const [isModalForgot, setIsModalForgot] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [fformData, setFFormData] = useState({
    email: "",
  });
  const [ferrors, setFErrors] = useState({
    email: "",
  });
  const router = useRouter();
  const { id } = router.query;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: loginValidation(name, value),
    });
    setFormData({ ...formData, [name]: value });
  };

  const fhandleChange = (e) => {
    const { name, value } = e.target;
    setFErrors({
      ...errors,
      [name]: forgotValidation(name, value),
    });
    setFFormData({ ...fformData, [name]: value });
  };
  useEffect(() => {
    if (isModal) {
      setFormData({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
    }
  }, [isModal]);

  useEffect(() => {
    if (isModalForgot) {
      setFFormData({
        email: "",
      });
      setFErrors({
        email: "",
      });
    }
  }, [isModalForgot]);

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

  const dispatch = useDispatch();

  const { user: auth, status } = useSelector((state) => state.auth);
  const { user: authForgotPwd, status: fstatus } = useSelector(
    (state) => state.authForgotPwd
  );

  useEffect(() => {
    // console.log(auth);
    if (auth?.status == 200) {
      modalClose();
    }
  }, [auth]);

  useEffect(() => {
    console.log(authForgotPwd);
    if (authForgotPwd?.status === 200 && authForgotPwd?.data?.verify_key) {
      modalClose();
      if (id) {
        router.push(
          `/test-detail/${encodeURIComponent(id)}?resetkey=${
            authForgotPwd?.data?.verify_key
          }`
        );
      } else {
        router.push(`?resetkey=${authForgotPwd?.data?.verify_key}`);
      }
    }
  }, [authForgotPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(formData).forEach((name) => {
      const error = loginValidation(name, formData[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (Object.keys(validationErrors).length === 0) {
      dispatch(loginAPI(formData));
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fformData).forEach((name) => {
      const error = loginValidation(name, fformData[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setFErrors(validationErrors);
      return;
    }
    if (Object.keys(validationErrors).length === 0) {
      dispatch(forgotPwdAPI({ email: fformData.email }));
    }
  };

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
                  <div>
                    <Input
                      type="name"
                      name={"email"}
                      value={formData.email}
                      placeholder="Email"
                      onChange={handleChange}
                      maxLength={50}
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
                      maxLength={50}
                      error={errors?.password}
                    />
                  </div>
                  <div className="w-100 text-end">
                    <button
                      type="button"
                      className="modal-links"
                      onClick={modalOpen}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn btn-orange-color border-0"
                      disabled={status == "loading"}
                    >
                      {status == "loading" ? (
                        <ThreeDots
                          height="24"
                          width="42"
                          color="#FFF"
                          wrapperClass="login-loading"
                        />
                      ) : (
                        "Login"
                      )}
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
                    <Input
                      type="name"
                      name={"email"}
                      value={fformData.email}
                      placeholder="Email"
                      onChange={fhandleChange}
                      maxLength={50}
                      error={ferrors?.email}
                    />
                  </div>
                  <div className="w-100 text-end">
                    <button
                      type="button"
                      className="modal-links"
                      onClick={modalOpen}
                    >
                      Go Back to Login
                    </button>
                  </div>
                  <div className="">
                    <button
                      className="btn btn-orange-color border-0"
                      disabled={fstatus == "loading"}
                    >
                      {fstatus == "loading" ? (
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
    </div>
  );
}
