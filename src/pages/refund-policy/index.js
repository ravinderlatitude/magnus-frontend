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
      <Banner title={"Refund Policy"} />
      <div className="about-block contactuspage terms-page">
        <div className="container">
          <div className="row ">
            <div className="col-md-8 col-12 title-text mx-auto mt-md-3 mt-0">
              <p>
                At Magnus Latitude, we strive to provide a satisfying and
                valuable experience for our users. This Refund Policy outlines
                our guidelines regarding refunds for our personality test
                services. Please read this policy carefully before making a
                purchase, as it explains the circumstances under which refunds
                may be granted.
              </p>
              <h3>Eligibility for Refunds:</h3>
              <br />
              <h3>Digital Products:</h3>
              <p>
                Due to the nature of our personality tests being digital and
                instantly accessible upon purchase, we generally do not offer
                refunds for completed test transactions.
              </p>
              <h3>Technical Issues:</h3>
              <p>
                If you encounter technical difficulties that prevent you from
                accessing or completing the personality test, please contact our
                support team within [specified timeframe] of your purchase for
                assistance. We will make reasonable efforts to resolve the issue
                and provide access to the test.
              </p>

              <h3>Unavailability of Service:</h3>
              <p>
                In the rare event that our personality test service becomes
                temporarily or permanently unavailable, and we are unable to
                provide the test as advertised, you may be eligible for a
                refund. We will consider such situations on a case-by-case
                basis.
              </p>
              <br />
              <br />
              <h3>Refund Process:</h3>
              <br />
              <h3>Contacting Support:</h3>
              <p>
                To request a refund, please contact our customer support team at
                Magnus Latitude and provide the necessary details of your
                purchase and the reason for your refund request.
              </p>
              <h3>Evaluation of Refund Request:</h3>
              <p>
                Each refund request will be evaluated based on the specific
                circumstances provided. We reserve the right to request
                additional information or evidence to support your refund claim.
              </p>

              <h3>Refund Decisions:</h3>
              <p>
                Refund requests will be processed within a reasonable timeframe,
                and we will notify you of the outcome via the contact
                information you provided. Approved refunds will be issued
                through the original payment method used for the purchase.
              </p>
              <br />
              <br />
              <h3>Non-Refundable Situations:</h3>
              <br />
              <h3>Completed Tests:</h3>
              <p>
                Once a personality test is completed and results are accessed,
                refunds will not be granted.
              </p>
              <h3>Change of Mind:</h3>
              <p>
                We do not provide refunds for purchases made in error or due to
                a change of mind. Please review your purchase carefully before
                submitting payment.
              </p>
              <h3>Third-Party Purchases:</h3>
              <p>
                If you purchased our personality test services through a
                third-party platform or reseller, refund requests must be made
                according to their respective refund policies.
              </p>
              <h3>Disputed Charges:</h3>
              <p>
                If you believe that you have been charged incorrectly or
                fraudulently, please contact our customer support immediately
                for assistance in resolving the issue. We will work with you to
                investigate and address any valid concerns regarding billing
                discrepancies or unauthorized charges.
              </p>
              <h3>Policy Updates:</h3>
              <p>
                We reserve the right to update or modify this Refund Policy at
                any time without prior notice. Any changes will be immediately
                reflected upon posting the revised policy on our website. It is
                your responsibility to review this policy periodically to stay
                informed about our refund guidelines.
              </p>

              <p>
                If you have any questions or need further clarification
                regarding our Refund Policy, please
                <Link
                  className="btn-link-orange-color"
                  style={{ fontSize: "unset" }}
                  href="/contact"
                >
                  {" "}
                  contact us{" "}
                </Link>
                . We are here to assist you and ensure your satisfaction with
                our personality test services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
