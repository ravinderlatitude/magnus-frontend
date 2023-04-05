import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ICclose from "../assets/images/ICclose.svg";
import useOutsideClick from "../hooks/useOutsideClick";

export default function ModalRegister({ isModal, setIsModal }) {
  // for Modal
  const modalClick = (event) => {
    setIsModal((current) => !current);
  };
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

              <div class="row">
                <div className="col-12 col-md-6 pe-md-1">
                  <input
                    type="name"
                    value=""
                    placeholder="First name"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-md-6 ps-md-1">
                  <input
                    type="name"
                    value=""
                    placeholder="Last name"
                    className="form-control"
                  />
                </div>
              </div>

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
                  type="password"
                  value=""
                  placeholder="Password"
                  className="form-control"
                />
                <div>
                  <input
                    type="password"
                    value=""
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="">
                <button className="btn btn-orange-color border-0">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
