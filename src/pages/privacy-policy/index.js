import { useState, useEffect } from "react";

import Banner from "../../components/banner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div>
      <Banner title={"Privacy Policy"} />
      <div className="about-block contactuspage terms-page">
        <div className="container">
          <div className="row ">
            <div className="col-md-8 col-12 title-text mx-auto mt-md-3 mt-0">
              <p>
                At Magnus Latitude, we value and prioritize the privacy of our
                users. This Privacy Policy outlines the types of information we
                collect, how we use it, and the measures we take to protect your
                personal data. By using our website and services, you consent to
                the practices described below.
              </p>
              <h3>Information Collection:</h3>
              <br />
              <h3>Personal Information:</h3>
              <p>
                When you participate in our personality tests, we may collect
                certain personal information such as your name, email address,
                age, and demographic details. This information is voluntarily
                provided by you. It is mandatory for us to collect this
                information to serve you better.
              </p>
              <h3>Non-Personal Information:</h3>
              <p>
                We may also collect non-personal information, including
                aggregated data, which does not directly identify you. This may
                include browser type, device information, IP addresses, and
                usage statistics.
              </p>
              <br />
              <br />
              <h3>Use of Information:</h3>
              <br />
              <h3>Personal Information:</h3>
              <p>
                We use the personal information you provide to deliver and
                improve our services, personalize your experience, communicate
                with you, and provide relevant recommendations.
              </p>
              <h3>Non-Personal Information:</h3>
              <p>
                Non-personal information is used to analyze trends, track user
                behavior, and enhance our website's functionality and
                performance.
              </p>
              <h3>Disclaimer of Warranties:</h3>
              <p>
                We disclaim all warranties, including but not limited to, the
                accuracy, completeness, reliability, or suitability of the
                Service for any particular purpose. You also agree that the use
                of service is at your own risk.
              </p>
              <br />
              <br />
              <h3>Information Sharing:</h3>
              <br />
              <h3>Third-Party Service Providers:</h3>
              <p>
                We have full right to share your personal information with
                trusted third-party service providers who assist us in operating
                our website, conducting our business, or servicing you. These
                providers are bound to keep your information confidential and
                are not permitted to use it for any other purpose.
              </p>
              <h3>Legal Requirements:</h3>
              <p>
                We may disclose your information if required by law, to protect
                our rights, or to comply with a legal process.
              </p>
              <h3>Data Security:</h3>
              <p>
                We take appropriate measures to protect your personal
                information from unauthorized access, alteration, destruction or
                disclosure. We use industry-standard security practices and
                technologies to ensure data integrity.
              </p>
              <h3>Cookies:</h3>
              <p>
                We may use cookies and similar technologies. This will enhance
                your browsing experience, analyze usage patterns, and
                personalize content. You can manage your cookie preferences by
                changing your browser settings.
              </p>
              <h3>Links to Third-Party Websites:</h3>
              <p>
                Users can find Third Party links on our website. We have no
                control over these websites' content and practices. So we are
                not responsible for their privacy policies. We encourage you to
                review the privacy policies of any linked websites.
              </p>
              <h3>Children's Privacy:</h3>
              <p>
                Our services are not intended for minors which are under the age
                of 13. Willingly, we do not collect personal information from
                children. We will take immediate steps to delete it, if we
                become aware of any information collected from children.
              </p>
              <h3>Updates to the Privacy Policy:</h3>
              <p>
                Periodically, we may update our Privacy Policy. The changes will
                be directly reflected on the page.
              </p>

              <p>
                If you have any questions or concerns about our Privacy Policy,
                please{" "}
                <Link
                  className="btn-link-orange-color"
                  style={{ fontSize: "unset" }}
                  href="/contact"
                >
                  {" "}
                  contact us
                </Link>
                . Your privacy matters to us, and we are committed to ensuring a
                safe and secure environment for all our users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
