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
export default function courseDetail() {
  const [isModalRegister, setIsModalRegister] = useState(false);

  return (
    <div>
      <Banner title={"About Us"} isButton={true} />
    </div>
  );
}
