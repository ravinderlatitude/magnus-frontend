import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import IcRight from "../assets/images/IcRight.svg";
// import IcLoader from "../assets/images/IcLoader.gif";
import useOutsideClick from "../hooks/useOutsideClick";

export default function ModalSuccess({ loading, isModal, setIsModal }) {
  const modelRef = useRef(null);

  // for Modal
  const modalOpen = (event) => {
    setIsModal(!isModal);
    // console.log(isModalForgot, "Forgormodal");
  };

  const modalClose = (event) => {
    // setInterval(() => {
    setIsModal(false);
    // }, 1000 * 8);
    // console.log(isModalForgot, "modal");
  };
  useOutsideClick(modelRef, modalClose);

  return (
    <div>
      <div className={" " + (!isModal ? "d-none" : "d-flex")}>
        <div className="modal-bg-overlay">
          <div className="modal-main" ref={modelRef}>
            {/* <span className="modal-close" onClick={modalClose}>
                <Image src={ICclose} alt="" />
              </span> */}
            {loading ? (
              <>
                <div className="text-center">
                  <div className="loader--ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <p className="text-white">
                    Your Payment Is Under Process Don't Close This Tab
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <Image src={IcRight} alt="Payment Success" width={110} />
                <h2>Payment Success</h2>
                <p className="text-white">
                  Please check your registered email and access the test code.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
