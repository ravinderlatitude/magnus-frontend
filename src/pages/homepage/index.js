import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

import BannerImg from "../../assets/images/banner-img.png";
import PeopleTalking from "../../assets/images/people-talking.png";
import PlayIc from "../../assets/images/playic.svg";
import UserImg from "../../assets/images/UserImg.png";
import StarFill from "../../assets/images/star-fill.svg";
import StarBlank from "../../assets/images/star-blank.svg";

import ICAccessible from "../../assets/images/ICAccessible.svg";
import ICReputable from "../../assets/images/ICReputable.svg";
import ICDiscreet from "../../assets/images/ICDiscreet.svg";
import ICLearning from "../../assets/images/ICLearning.svg";
import ICStream from "../../assets/images/ICStream.svg";
import ICIdeal from "../../assets/images/ICIdeal.svg";
import ICPersonality from "../../assets/images/ICPersonality.svg";
import ICMultiple from "../../assets/images/ICMultiple.svg";
import ICHumanities from "../../assets/images/ICHumanities.svg";
import ICCommerce from "../../assets/images/ICCommerce.svg";
import ICEngineering from "../../assets/images/ICEngineering.svg";
import ICArrow from "../../assets/images/Arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const inter = Inter({ subsets: ["latin"] });

export default function homepage() {
  return (
    <div>
      <div className="banner title-text">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 ">
              <h6>
                Let’s <span>Begins</span>
              </h6>
              <h2>
                Let's Find The <span>Right Test </span>For you
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                dignissim, sem non convallis molestie.
              </p>
              <div className="btn-block">
                <Link className="btn btn-orange-color" href="/">
                  Register
                </Link>
                <Link
                  className="btn btn-link-blue-color align-items-center d-inline-flex"
                  href="/"
                >
                  <span className="ms-2 me-2">
                    <Image alt="" src={PlayIc} />
                  </span>
                  Play Video
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-12 order-md-last order-first">
              <Image alt="" src={BannerImg} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="title-text">
                <h6>WHY US?</h6>
                <h3>Why you Purchase test?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
                </p>
              </div>
            </div>
            <div className="col-md-8 col-12">
              <div className="row">
                <div className="col-md-4 col-12">
                  <div className="bx-block">
                    <div className="bx-icon">
                      <Image alt="" src={ICAccessible} />
                    </div>
                    <h6>Easy to Accessible</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam dignissim, sem non convallis molestie.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="bx-block">
                    <div className="bx-icon box_blue">
                      <Image alt="" src={ICReputable} />
                    </div>
                    <h6>Reputable Portal</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam dignissim, sem non convallis molestie.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="bx-block">
                    <div className="bx-icon">
                      <Image alt="" src={ICDiscreet} />
                    </div>
                    <h6>Discreet Payment</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam dignissim, sem non convallis molestie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-test">
        <div className="container">
          <div className="row">
            <div className="title-text text-center">
              <h6>AVAILABLE FOR YOU</h6>
              <h3>Find The Right Test</h3>
              <p className="col-12 col-md-6 mx-auto mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                dignissim, sem non convallis molestie.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon box_blue">
                  <Image alt="" src={ICLearning} />
                </div>
                <h6>Learning Style</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
                </p>
                <Link href="/" className="text-white justify-content-end">
                  Take Assessment
                  <span className="ms-2">
                    <Image src={ICArrow} alt="" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon">
                  <Image alt="" src={ICStream} />
                </div>
                <h6>Stream Selector</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
                </p>
                <Link href="/" className="text-white justify-content-end">
                  Take Assessment
                  <span className="ms-2">
                    <Image src={ICArrow} alt="" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon box_blue">
                  <Image alt="" src={ICIdeal} />
                </div>
                <h6>Ideal Career</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
                </p>
                <Link href="/" className="text-white justify-content-end">
                  Take Assessment
                  <span className="ms-2">
                    <Image src={ICArrow} alt="" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon">
                  <Image alt="" src={ICPersonality} />
                </div>
                <h6>Personality</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
                </p>
                <Link href="/" className="text-white justify-content-end">
                  Take Assessment
                  <span className="ms-2">
                    <Image src={ICArrow} alt="" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon">
                  <Image alt="" src={ICMultiple} />
                </div>
                <h6>Multiple Intelligence</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
                </p>
                <Link href="/" className="text-white justify-content-end">
                  Take Assessment
                  <span className="ms-2">
                    <Image src={ICArrow} alt="" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon box_blue">
                  <Image alt="" src={ICEngineering} />
                </div>
                <h6>Engineering Branch</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
                </p>
                <Link href="/" className="text-white justify-content-end">
                  Take Assessment
                  <span className="ms-2">
                    <Image src={ICArrow} alt="" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon">
                  <Image alt="" src={ICHumanities} />
                </div>
                <h6>Humanities Branch</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
                </p>
                <Link href="/" className="text-white justify-content-end">
                  Take Assessment
                  <span className="ms-2">
                    <Image src={ICArrow} alt="" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-12">
              <div className="bx-block">
                <div className="bx-icon box_blue">
                  <Image alt="" src={ICCommerce} />
                </div>
                <h6>Commerce Branch</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, sem non convallis molestie.
                </p>
                <Link href="/" className="text-white justify-content-end">
                  Take Assessment
                  <span className="ms-2">
                    <Image src={ICArrow} alt="" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-auto mx-auto">
              <Link href="/" className="btn btn-orange-color">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="people-talking">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <Image alt="" src={PeopleTalking} className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 title-text">
              <h6>TEST WE HAVE</h6>
              <h3 className="text-white">
                People Talking About Magnus Latitude
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                dignissim, sem non convallis molestie.
              </p>

              <div className="numbersblock">
                <div>
                  <span>6,000</span>
                  <h6>People Views</h6>
                </div>
                <div>
                  <span>4,000</span>
                  <h6>Users</h6>
                </div>
                <div>
                  <span>8</span>
                  <h6>Test</h6>
                </div>
              </div>

              <Link href="/" className="btn btn-orange-color">
                Log in
              </Link>
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
