import { useEffect, useState } from "react";
import Banner from "../../components/banner";

import IcUp from "../../assets/images/IcUp.svg";
import IcDown from "../../assets/images/IcDown.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";

// import LOGO from "../assets/images/logo.svg";
import { getFaqList } from "../../../apiServices/services";

import Testimonials from "@/components/Testimonials";

const Faq = () => {
  const [faqData, setfaqData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let faqList = await getFaqList();
        setfaqData(faqList.data);
        console.log("faqList=======", faqList);
      } catch (ee) {
        console.error(ee.data);
      }
    })();
  }, []);

  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  const AccordionItem = ({ faq, onToggle, active }) => {
    const { quation, content } = faq;
    return (
      <li className={`accordion_item ${active ? "active" : ""}`}>
        <button className="button" onClick={onToggle}>
          <h5>{quation}</h5>
          <div className="control">
            <Image src={active ? IcUp : IcDown} alt="" />
          </div>
        </button>
        <div className={`answer_wrapper ${active ? "open" : ""}`}>
          <div className="answer">{content}</div>
        </div>
      </li>
    );
  };

  return (
    <div>
      <Banner title={"FAQs"} />
      <div className="faq-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="container">
              <div className="col-md-8 col-12 mx-auto mb-5">
                <ul>
                  {faqData?.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      faq={faq}
                      onToggle={() => handleToggle(index)}
                      active={clicked === index}
                    />
                  ))}
                </ul>
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
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
