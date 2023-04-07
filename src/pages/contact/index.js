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
export default function contact() {
  const [isModalRegister, setIsModalRegister] = useState(false);

  return (
    <div>
      <Banner title={"Contact"} />
      <div className="about-block">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-12 title-text mt-md-5 mt-0">
              <h6>Reach out us</h6>
              <h3>Contact us if you have any questions.</h3>
              <p>
                Facilisis tempor aenean lectus elementum malsuada estibuls
                magnis interdum eget mattis pretium ulvinar. Facilisis tempor
                aenean lectus.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <form>
                <div class="row mb-4">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Contact Number"
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <textarea
                      type="text"
                      rows={4}
                      class="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <button className="btn btn-orange-color">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
