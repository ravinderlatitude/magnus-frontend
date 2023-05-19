import React, { useState } from "react";

import BannerImg from "../assets/images/banner-img.jpg";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ModalLogin from "./ModalLogin";

export default function banner({ title, isButton }) {
  // const router = useRouter();
  // const testName = router.query.testName;
  const auth = useSelector((state) => state.auth.user);
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="banner-bg">
      {isButton ? (
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <h1>{title}</h1>
            </div>
            <div className="col-auto">
              {!auth?.data ? (
                <div className="btn-block">
                  <button
                    className="btn btn-orange-color border-0"
                    onClick={() => setIsModal((current) => !current)}
                  >
                    Log in
                  </button>
                </div>
              ) : (
                <Link className="btn btn-orange-color" href="/">
                  Buy Test
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>{title}</h1>
        </div>
      )}

      <div>
        <ModalLogin isModal={isModal} setIsModal={setIsModal} />
      </div>
    </div>
  );
}
