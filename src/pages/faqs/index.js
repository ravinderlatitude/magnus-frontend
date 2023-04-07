import { useState } from "react";
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

const faqs = () => {
  const faqs = [
    {
      question: "Why do I need a real estate agent?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "How long will it take to sell my property?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "How much commission do you charge?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "Do I need a home inspection?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "How long will it take to sell my property?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "How much commission do you charge?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "Do I need a home inspection?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  const AccordionItem = ({ faq, onToggle, active }) => {
    const { question, answer } = faq;
    return (
      <li className={`accordion_item ${active ? "active" : ""}`}>
        <button className="button" onClick={onToggle}>
          <h5>{question}</h5>
          <div className="control">
            <Image src={active ? IcUp : IcDown} />
          </div>
        </button>
        <div className={`answer_wrapper ${active ? "open" : ""}`}>
          <div className="answer">{answer}</div>
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
                  {faqs.map((faq, index) => (
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
    </div>
  );
};
export default faqs;
