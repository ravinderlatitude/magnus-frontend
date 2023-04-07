import React from "react";
import Image from "next/image";
import Link from "next/link";

import Banner from "../../components/banner";
import PlacehoderImage from "../../assets/images/testplaceholder.png";
import ICtime from "../../assets/images/ICtime.svg";
import ICquestion from "../../assets/images/ICquestion.svg";

export default function testDetails() {
  return (
    <div>
      <Banner title={"Test Details"} isButton={true} />
      <div className="test-details">
        <div className="container">
          <div className="col-md-8 col-12 mx-auto mb-5">
            <div className="test-banner">
              <Image src={PlacehoderImage} alt="" />
            </div>
            <h2>About Assessment</h2>
            <div className="test-time">
              <div className="d-flex align-items-center">
                <span>
                  <Image src={ICtime} alt="" />
                </span>
                <p>120 minuets</p>
              </div>
              <div className="d-flex align-items-center">
                <span>
                  <Image src={ICquestion} alt="" />
                </span>
                <p>50 Questions</p>
              </div>
            </div>
            <p>
              This test is for students who have decided to pursue career in
              commerce. It will help choose your preferred commerce domain among
              all the financial and non-financial domains in commerce. The test
              will evaluate you on your interest and capabilities. The test has
              been prepared using scientific techniques and measured for
              statistical accuracy.
            </p>
            <h2>Assessment Output</h2>
            <p>
              The test output is in the form of a report which shares a brief
              about the financial and non-financial domains in commerce. The
              report will consist of scores on career cluster in commerce and
              career options in each cluster. For your visualization the report
              will consist of radar chart and interest graph that will provide
              you comparison between various domains.
            </p>
            <h2>Instructions</h2>
            <p>
              1. The test will consist of questions with three option. Choose
              the option that you feel is the best for you.
              <br /> 2. The questions do not have any right or wrong answers to
              the questions.
              <br />
              3. At the end of the test you will get a detailed report which
              will give you a clear direction of where you should be going.
            </p>

            <Link className="btn btn-orange-color" href="/">
              Buy Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
