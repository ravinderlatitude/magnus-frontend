import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import AboutImg from "../../assets/images/AboutImg.png";
import Banner from "../../components/banner";
import ModalRegister from "../../components/ModalRegister";

import ICLearning from "../../assets/images/ICLearning.svg";
import ICStream from "../../assets/images/ICStream.svg";

import ICSetUp from "../../assets/images/ICSetUp.svg";
import ICVarify from "../../assets/images/ICVarify.svg";
import ICChoose from "../../assets/images/ICChoose.svg";
import ICPay from "../../assets/images/ICPay.svg";

import UserImg from "../../assets/images/UserImg.png";
import StarFill from "../../assets/images/star-fill.svg";
import StarBlank from "../../assets/images/star-blank.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import LOGO from "../assets/images/logo.svg";
export default function aboutus() {
  const [isModalRegister, setIsModalRegister] = useState(false);

  return (
    <div>
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
                Facilisis tempor aenean lectus elementum malsuada estibuls
                magnis interdum eget mattis pretium ulvinar. Facilisis tempor
                aenean lectus.
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
              <button
                className="btn btn-orange-color"
                onClick={() => setIsModalRegister((current) => !current)}
              >
                Register
              </button>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
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
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block bg_colorBlue mt-md-5 mt-0">
                <div className="bx-icon box_blue">
                  <Image alt="" src={ICVarify} />
                </div>
                <h6>Verified User Sign in</h6>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon">
                  <Image alt="" src={ICChoose} />
                </div>
                <h6>Choose the ideal test</h6>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block bg_colorBlue mt-md-5 mt-0">
                <div className="bx-icon box_blue">
                  <Image alt="" src={ICPay} />
                </div>
                <h6>Pay to access the test.</h6>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-block">
        <div className="container">
          <div className="row">
            <div className="title-text text-center">
              <h2>Testimonials</h2>
            </div>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4000 }}
              // navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                // when window width is >= 576
                576: {
                  // width: 576,
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="testi-blcok">
                  <div className="user-info">
                    <div className="user-img">
                      <Image alt="" src={UserImg} />
                    </div>
                    <div>
                      <h4>Friskidia</h4>
                      <h6>Client</h6>
                    </div>
                  </div>
                  <div className="ratings">
                    <span>
                      <Image alt="" src={StarFill} />
                    </span>
                    <span>
                      <Image alt="" src={StarFill} />
                    </span>
                    <span>
                      <Image alt="" src={StarFill} />
                    </span>
                    <span>
                      <Image alt="" src={StarBlank} />
                    </span>
                    <span>
                      <Image alt="" src={StarBlank} />
                    </span>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec rutrum dapibus luctus.
                  </p>
                  <span className="top-right-corner"> </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testi-blcok">
                  <div className="user-info">
                    <div className="user-img">
                      <Image alt="" src={UserImg} />
                    </div>
                    <div>
                      <h4>Friskidia</h4>
                      <h6>Client</h6>
                    </div>
                  </div>
                  <div className="ratings">
                    <span>
                      <Image alt="" src={StarFill} />
                    </span>
                    <span>
                      <Image alt="" src={StarFill} />
                    </span>
                    <span>
                      <Image alt="" src={StarFill} />
                    </span>
                    <span>
                      <Image alt="" src={StarBlank} />
                    </span>
                    <span>
                      <Image alt="" src={StarBlank} />
                    </span>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec rutrum dapibus luctus.
                  </p>
                  <span className="top-right-corner"> </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testi-blcok">
                  <div className="user-info">
                    <div className="user-img">
                      <Image alt="" src={UserImg} />
                    </div>
                    <div>
                      <h4>Friskidia</h4>
                      <h6>Client</h6>
                    </div>
                  </div>
                  <div className="ratings">
                    <span>
                      <Image alt="" src={StarFill} />
                    </span>
                    <span>
                      <Image alt="" src={StarFill} />
                    </span>
                    <span>
                      <Image alt="" src={StarFill} />
                    </span>
                    <span>
                      <Image alt="" src={StarBlank} />
                    </span>
                    <span>
                      <Image alt="" src={StarBlank} />
                    </span>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec rutrum dapibus luctus.
                  </p>
                  <span className="top-right-corner"> </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
