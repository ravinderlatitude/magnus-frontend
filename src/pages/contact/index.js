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
import { contactFormValidation } from "@/utils/form";
import { ThreeDots } from "react-loader-spinner";
import Head from "next/head";

const Contact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    contact_message: "",
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    contact_message: "",
  });

  const { user: contact, status } = useSelector((state) => state.contact);
  const authError = useSelector((state) => state.contact.error);
  const auth = useSelector((state) => state.auth.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: contactFormValidation(name, value),
    });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(formData).forEach((name) => {
      const error = contactFormValidation(name, formData[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (Object.keys(validationErrors).length === 0) {
      dispatch(ContacUsAPI(formData));
    }
  };

  useEffect(() => {
    console.log(contact);
    if (contact?.status == 200) {
      if (auth?.data) {
        setFormData({
          first_name: auth.data.first_name,
          last_name: auth.data.last_name,
          email: auth.data.email,
          contact_number: "",
          contact_message: "",
        });
      } else {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          contact_number: "",
          contact_message: "",
        });
      }
    }
  }, [contact, auth]);

  return (
    <div>
      <Head>
        <title>Contact - Latitude Magnus</title>
      </Head>
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
                      name="first_name"
                      value={formData.first_name}
                      class="form-control"
                      placeholder="First name"
                      onChange={handleChange}
                      maxLength={50}
                    />
                    {errors?.first_name && (
                      <span className="error-message font-red">
                        {errors?.first_name}
                      </span>
                    )}
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      class="form-control"
                      placeholder="Last name"
                      onChange={handleChange}
                      maxLength={50}
                    />
                    {errors?.last_name && (
                      <span className="error-message font-red">
                        {errors?.last_name}
                      </span>
                    )}
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      class="form-control"
                      placeholder="Email"
                      onChange={handleChange}
                      maxLength={50}
                    />
                    {errors?.email && (
                      <span className="error-message font-red">
                        {errors?.email}
                      </span>
                    )}
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <input
                      type="text"
                      name="contact_number"
                      value={formData.contact_number}
                      class="form-control"
                      placeholder="Contact Number"
                      onChange={handleChange}
                      maxLength={13}
                    />
                    {errors?.contact_number && (
                      <span className="error-message font-red">
                        {errors?.contact_number}
                      </span>
                    )}
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <textarea
                      type="text"
                      rows={4}
                      name={"contact_message"}
                      value={formData.contact_message}
                      class="form-control"
                      placeholder="Message"
                      onChange={handleChange}
                      maxLength={500}
                    ></textarea>
                    {errors?.contact_message && (
                      <span className="error-message font-red">
                        {errors?.contact_message}
                      </span>
                    )}
                  </div>
                </div>
                {/* <span className="errorMessage">{contact?.message}</span> */}
                <div class="row mb-2">
                  <div class="col">
                    <button
                      className="btn btn-orange-color"
                      disabled={status == "loading"}
                    >
                      {status == "loading" ? (
                        <ThreeDots height="24" width="56" color="#FFF" />
                      ) : (
                        "Submit"
                      )}
                    </button>
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
                      href="tel:+919898332166"
                      className="text-lowercase d-flex align-items-center"
                    >
                      <Image src={IcMobile} className="me-2" />
                      <p className="m-0">+91 9898332166</p>
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
