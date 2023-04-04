import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ICclose from "../assets/images/ICclose.svg";
import useOutsideClick from "../hooks/useOutsideClick";

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

                <div>
                  <input
                    type="name"
                    value=""
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="name"
                    value=""
                    placeholder="Password"
                    className="form-control"
                  />
                </div>

                <div className="w-100 text-end">
                  <Link href="/" className="modal-links" onClick={modalOpen}>
                    Forgot Password?
                  </Link>
                </div>
                <div className="">
                  <button className="btn btn-orange-color border-0">
                    Login
                  </button>
                </div>
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
                    Login
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
