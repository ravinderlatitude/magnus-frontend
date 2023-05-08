import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

import BannerImg from "../../assets/images/banner-img.png";
import PeopleTalking from "../../assets/images/people-talking.png";
import PlayIc from "../../assets/images/playic.svg";

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

import ModalRegister from "@/components/ModalRegister";
import ModalLogin from "@/components/ModalLogin";
import Testimonials from "@/components/Testimonials";

import { useSelector } from "react-redux";

export default function homepage() {
  const auth = useSelector((state) => state.auth.user);

  const [isModalRegister, setIsModalRegister] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const testList = useSelector((state) => state.testList.data);
  // const [testListData, setTestListData] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let testList = await getTetsList();
  //       setTestListData(testList.data);
  //     } catch (ee) {
  //       console.error("hftygfy hfyfdchdfg", ee);
  //     }
  //   })();
  // }, []);

  // console.log(testList);

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
              {/* <div className="btn-block">
                <button
                  className="btn btn-orange-color"
                  onClick={() => setIsModalRegister((current) => !current)}
                >
                  Register
                </button>
              </div> */}

              {!auth?.data ? (
                <div className="btn-block">
                  <button
                    className="btn btn-orange-color"
                    onClick={() => setIsModalRegister((current) => !current)}
                  >
                    Register
                  </button>
                  <div>
                    <ModalLogin isModal={isModal} setIsModal={setIsModal} />
                  </div>
                  <div>
                    <ModalRegister
                      isModal={isModalRegister}
                      setIsModal={setIsModalRegister}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <Link className="btn btn-orange-color" href="/aboutus">
                    More About
                  </Link>
                </>
              )}
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
                  <div className="bx-block box_blue">
                    <div className="bx-icon">
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
          <div className="row justify-content-around">
            {testList?.map((data, index) =>
              testList?.length >= 8 ? (
                <div className="fourbox" key={index.toString()}>
                  <div className="bx-icon">
                    <Image
                      alt={data.test_name}
                      src={data?.image ? data.image : ICLearning}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h6>{data.test_name}</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam dignissim, sem non convallis molestie.
                  </p>
                  {/* <Link
                    href={`/test-detail/${encodeURIComponent(data.slug)}`}
                    className="d-flex text-white justify-content-end"
                  >
                    Take Assessment
                    <span className="ms-2">
                      <Image src={ICArrow} alt="" />
                    </span>
                  </Link> */}

                  <li key={index.toString()}>
                    {/* {console.log("LI data=====", data)} */}
                    {/* <ActiveLink href="/test-detail" className="dropdown-item"> */}
                    <Link
                      href={`/test-detail/${encodeURIComponent(data.slug)}`}
                      className="d-flex text-white justify-content-end"
                    >
                      Take Assessment
                      <span className="ms-2">
                        <Image src={ICArrow} alt="" />
                      </span>
                    </Link>
                  </li>
                </div>
              ) : null
            )}

            {/* <div className="col-md-3 col-sm-6 col-12">
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
              <div className="bx-block box_blue">
                <div className="bx-icon">
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
              <div className="bx-block box_blue">
                <div className="bx-icon">
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
              <div className="bx-block box_blue">
                <div className="bx-icon">
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
            </div> */}
          </div>

          {!auth?.data ? (
            <div className="btn-block text-center">
              <button
                className="btn btn-orange-color btn-sm"
                onClick={() => setIsModal((current) => !current)}
              >
                Log in
              </button>
            </div>
          ) : null}
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

              {!auth?.data ? (
                <div className="btn-block">
                  <button
                    className="btn btn-orange-color border-0"
                    onClick={() => setIsModal((current) => !current)}
                  >
                    Log in
                  </button>
                </div>
              ) : null}
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
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
}
