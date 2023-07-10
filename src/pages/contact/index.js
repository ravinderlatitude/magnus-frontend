import { useState, useEffect } from "react";

import Banner from "../../components/banner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import IcMobile from "../../assets/images/ic_mobile.svg";
import IcEmail from "../../assets/images/ic_email.svg";
import IcAddress from "../../assets/images/ic_address.svg";

import { ContacUsAPI } from "../../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contactnumber, setIsContactNumber] = useState(null);
  const [textmessage, setIsTextMessage] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState(null);

  const contact = useSelector((state) => state.contact.user);
  const authError = useSelector((state) => state.contact.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      ContacUsAPI({
        first_name: firstName,
        last_name: lastName,
        email: email,
        contact_number: contactnumber,
        contact_message: textmessage,
      })
    );
    setError(contact?.message);
    // console.log("message======>", contact);
  };

  const handleFirstName = (event) => {
    const { value } = event.target;
    setFirstName(value);
  };

  const handleLastName = (event) => {
    const { value } = event.target;
    setLastName(value);
  };

  const handleContactChange = (event) => {
    const { value } = event.target;
    setIsContactNumber(value);
  };

  const handeTextAreaChange = (event) => {
    const { value } = event.target;
    setIsTextMessage(value);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    // email validation
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    if (value.length < 1) {
      setEmailError("");
    }
  };

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <div>
      <Banner title={"Contact"} />
      <div className="about-block contactuspage">
        <div className="container">
          <div className="col-md-6 col-12 title-text text-center mx-auto">
            <h6>Reach out us</h6>
            <h3>Contact us if you have any questions.</h3>
            <p>
              We are always ready to assist queries of our users. Share your
              message or enquiry and our team will connect you as soon as
              possible.
            </p>
          </div>

          <div className="row mt-md-5 mt-0 justify-content-center">
            <div className="col-md-6 col-12">
              <form onSubmit={handleSubmit}>
                <div class="row mb-2">
                  <div class="col">
                    <input
                      type="text"
                      value={firstName}
                      class="form-control"
                      placeholder="First name"
                      onChange={handleFirstName}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      value={lastName}
                      class="form-control"
                      placeholder="Last name"
                      onChange={handleLastName}
                    />
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <input
                      type="text"
                      value={email}
                      class="form-control"
                      placeholder="Email"
                      onChange={handleEmailChange}
                    />
                  </div>
                  {emailError && (
                    <span className="errorMessage">{emailError}</span>
                  )}
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <input
                      type="text"
                      value={contactnumber}
                      class="form-control"
                      placeholder="Contact Number"
                      onChange={handleContactChange}
                    />
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <textarea
                      type="text"
                      rows={4}
                      value={textmessage}
                      class="form-control"
                      placeholder="Message"
                      onChange={handeTextAreaChange}
                    ></textarea>
                  </div>
                </div>
                <span className="errorMessage">{contact?.message}</span>
                <div class="row mb-2">
                  <div class="col">
                    <button className="btn btn-orange-color">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4 col-12 title-text mt-xs-0 mt-sm-0 mt-3">
              <div className="col-auto follow-us">
                <h6>Contact Details</h6>
                <ul>
                  <li>
                    <p className="d-flex">
                      <Image src={IcAddress} className="me-2" alt="facebook" />
                      FF 122 SHRIDHAR ORAM, NR SHIVALAY PARISAR, Kudasan,
                      Gandhinagar 382421, Gujarat
                    </p>
                  </li>
                  <li className="d-flex">
                    <Link
                      href="mailto:magnuslatitude@gmail.com"
                      className="text-lowercase d-flex align-items-center"
                    >
                      <Image src={IcEmail} className="me-2" alt="facebook" />
                      <p className="m-0">magnuslatitude@gmail.com</p>
                    </Link>
                  </li>
                  <li className="d-flex">
                    <Link
                      href="tel:+919979432166"
                      className="text-lowercase d-flex align-items-center"
                    >
                      <Image src={IcMobile} className="me-2" />
                      <p className="m-0">+91 9979432166</p>
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
};
export default Contact;
