import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import UserImg from "../../src/assets/images/UserImg.png";
import StarFill from "../../src/assets/images/star-fill.svg";
import StarBlank from "../../src/assets/images/star-blank.svg";

export default function Testimonials() {
  return (
    <>
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
                <h4>Friskidia1</h4>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rutrum dapibus luctus.
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
                <h4>Friskidia2</h4>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rutrum dapibus luctus.
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
                <h4>Friskidia3</h4>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rutrum dapibus luctus.
            </p>
            <span className="top-right-corner"> </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
