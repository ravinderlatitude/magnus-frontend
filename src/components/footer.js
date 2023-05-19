import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

// local images
import FOOTER_LOGO from "../assets/images/Flogo.svg";
import IcFacebook from "../assets/images/IcFacebook.svg";
import IcInstagram from "../assets/images/IcInstagram.svg";
import { getTetsList } from "../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";

export default function Footer() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);

  const testList = useSelector((state) => state.testList.data);
  useEffect(() => {
    dispatch(getTetsList());
    // console.log("Footer=======>>>", testList);
  }, [dispatch]);
  return (
    <div className="footer-main">
      <div className="container c-container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-12">
            <Link href="/">
              <Image alt="" src={FOOTER_LOGO} />
            </Link>
            <p className="mt-3">
              At our personality test website, we are dedicated to providing you
              with an enriching and insightful experience that helps you better
              understand yourself and unlock your true potential.
            </p>
          </div>
          <div className="col-lg-8 col-sm-12 col-12">
            <div className="row">
              <div className="col-md-4">
                <h4>Navigations</h4>
                <ul>
                  <li>
                    <Link href="/"> Home</Link>
                  </li>
                  <li>
                    <Link href="/aboutus"> About Us</Link>
                  </li>
                  <li>
                    <Link href="/terms"> Terms and Conditons</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>Assessments</h4>
                <ul>
                  {testList?.map((data, index) => (
                    <li key={index.toString()}>
                      {/* {console.log("LI data=====", data)} */}
                      {/* <ActiveLink href="/test-detail" className="dropdown-item"> */}
                      <Link
                        href={`/test-detail/${encodeURIComponent(data.slug)}`}
                      >
                        {data.test_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-auto follow-us">
                <h4>Follow us</h4>
                <ul>
                  <li>
                    <Link
                      href="https://www.facebook.com/people/Education_By_Magnitude/100091586467348/"
                      className="text-lowercase"
                      target="_blank"
                    >
                      <Image src={IcFacebook} className="me-2" alt="facebook" />
                      facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/educationbymagnitude/?next=%2F"
                      className="text-lowercase"
                      target="_blank"
                    >
                      <Image
                        src={IcInstagram}
                        className="me-2"
                        alt="Instagram"
                      />
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
