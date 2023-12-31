import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

import BannerImg from "../assets/images/banner-img.png";
import PeopleTalking from "../assets/images/people-talking.png";
import PlayIc from "../assets/images/playic.svg";
import UserImg from "../assets/images/UserImg.png";
import StarFill from "../assets/images/star-fill.svg";
import StarBlank from "../assets/images/star-blank.svg";

import ICAccessible from "../assets/images/ICAccessible.svg";
import ICReputable from "../assets/images/ICReputable.svg";
import ICDiscreet from "../assets/images/ICDiscreet.svg";
import ICLearning from "../assets/images/ICLearning.svg";
import ICStream from "../assets/images/ICStream.svg";
import ICIdeal from "../assets/images/ICIdeal.svg";
import ICPersonality from "../assets/images/ICPersonality.svg";
import ICMultiple from "../assets/images/ICMultiple.svg";
import ICHumanities from "../assets/images/ICHumanities.svg";
import ICCommerce from "../assets/images/ICCommerce.svg";
import ICEngineering from "../assets/images/ICEngineering.svg";
import ICArrow from "../assets/images/Arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import Homepage from "./homepage/index";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Latitude Magnus</title>
        <meta
          name="description"
          content="
        Magnus Latitude Pvt Ltd offers a self-assessment platform. Discover yourself and unlock your true potential with our various personality tests."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 , user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage />
      </main>
    </>
  );
}
