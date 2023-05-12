import { useState, useEffect } from "react";

import Banner from "../../components/banner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { ContacUsAPI } from "../../../apiServices/services";
import { useDispatch, useSelector } from "react-redux";

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
          <div className="row ">
            <div className="col-md-6 col-12 title-text mt-md-5 mt-0">
              <h6>Reach out us</h6>
              <h3>Contact us if you have any questions.</h3>
              <p>
                Facilisis tempor aenean lectus elementum malsuada estibuls
                magnis interdum eget mattis pretium ulvinar. Facilisis tempor
                aenean lectus.
              </p>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
