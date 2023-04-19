import React, { useEffect, useState } from "react";
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
import ICSetUp from "../../src/assets/images/ICSetUp.svg";

import { getTetsList, getTetimonialList } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";

export default function Testimonials() {
  // const [testimonialData, setTestimonialData] = useState([]);
  const dispatch = useDispatch();
  const tetimonialList = useSelector((state) => state.tetimonialList.data);
  const loading = useSelector((state) => state.tetimonialList.loading);
  const error = useSelector((state) => state.tetimonialList.error);
  useEffect(() => {
    console.log("first");
    dispatch(getTetimonialList());
    return () => {};
  }, []);
  // console.log("dispatch==========", tetimonialList);

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
        {tetimonialList?.map((testimonial, index) => (
          <SwiperSlide key={index.toString()}>
            <div className="testi-blcok">
              <div className="user-info">
                <div className="user-img">
                  {/* <Image alt="" src={ICSetUp} /> */}
                  <Image
                    alt={testimonial.title}
                    src={testimonial?.image ? testimonial.image : ICSetUp}
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h4>{testimonial.title}</h4>
                  <h6>{testimonial.sub_title}</h6>
                </div>
              </div>

              <p className="mt-3">{testimonial.description}</p>
              <span className="top-right-corner"> </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
