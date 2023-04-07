import React from "react";

import BannerImg from "../assets/images/banner-img.jpg";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

export default function banner({ title, isButton }) {
  // const router = useRouter();
  // const testName = router.query.testName;
  return (
    <div className="banner-bg">
      {isButton ? (
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <h1>{title}</h1>
            </div>
            <div className="col-auto">
              <Link className="btn btn-orange-color" href="/">
                Buy Test
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
}
