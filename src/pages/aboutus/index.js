import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Head from "next/head";

import AboutImg from "../../assets/images/AboutImg.png";
import Banner from "../../components/banner";
import ModalRegister from "../../components/ModalRegister";

import ICSetUp from "../../assets/images/ICSetUp.svg";
import ICVarify from "../../assets/images/ICVarify.svg";
import ICChoose from "../../assets/images/ICChoose.svg";
import ICPay from "../../assets/images/ICPay.svg";

import Testimonials from "@/components/Testimonials";

// import LOGO from "../assets/images/logo.svg";
const Aboutus = () => {
  const auth = useSelector((state) => state.auth.user);
  const [isModalRegister, setIsModalRegister] = useState(false);

  return (
    <div>
      <Head>
        <title>About Us - Latitude Magnus</title>
      </Head>
      <Banner title={"About Us"} />
      <div className="about-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <Image src={AboutImg} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 title-text mt-md-0 mt-4">
              <h6>Know More</h6>
              <h3>We offer a carefully and planned test.</h3>
              <p>
                Magnus Latitude Pvt Ltd is dedicated to helping individuals gain
                a deeper understanding of themselves through our comprehensive
                and insightful personality test. Our mission is to provide a
                reliable and accurate assessment that empowers individuals to
                unlock their true potential and live more fulfilling lives.
              </p>
              <div className="numbersblock">
                <div>
                  <span className="text-orange">80%</span>
                  <h6 className="text-blue">Happy Student</h6>
                </div>
                <div>
                  <span className="text-orange">5K+</span>
                  <h6 className="text-blue">Test we offer</h6>
                </div>
              </div>

              {!auth?.data ? (
                <div className="btn-block">
                  <button
                    className="btn btn-orange-color"
                    onClick={() => setIsModalRegister((current) => !current)}
                  >
                    Register
                  </button>
                </div>
              ) : null}

              <div>
                <ModalRegister
                  isModal={isModalRegister}
                  setIsModal={setIsModalRegister}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="eazy-test">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-text text-center">
                <h6 className="text-orange">TEST WE HAVE</h6>
                <h3 className="text-white">Easy Way Access Test</h3>
                <p className="col-12 col-md-6 mx-auto mb-5 text-white">
                  Follow the steps below to avail the right path to accessing
                  the test.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-md-5 mt-0">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon">
                  <Image alt="" src={ICSetUp} />
                </div>
                <h6>Set Up an Account</h6>
                <p>Sign up with your details and make an account.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block bg_colorBlue mt-md-5 mt-0">
                <div className="bx-icon box_blue">
                  <Image alt="" src={ICVarify} />
                </div>
                <h6>Verified User Sign in</h6>
                <p>Complete the process with the verification. </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon">
                  <Image alt="" src={ICChoose} />
                </div>
                <h6>Choose the ideal test</h6>
                <p>Select the ideal test as per your need and requirement.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block bg_colorBlue mt-md-5 mt-0">
                <div className="bx-icon box_blue">
                  <Image alt="" src={ICPay} />
                </div>
                <h6>Pay to access the test.</h6>
                <p>Make the final payment to buy the test.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-text text-center">
                <h2>Testimonials</h2>
              </div>
              <Testimonials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
