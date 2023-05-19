import { useState, useEffect } from "react";

import Banner from "../../components/banner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Terms = () => {
  return (
    <div>
      <Banner title={"Terms & Conditions"} />
      <div className="about-block contactuspage terms-page">
        <div className="container">
          <div className="row ">
            <div className="col-md-8 col-12 title-text mx-auto mt-md-3 mt-0">
              <p>
                This page is introducing us to the terms and conditions of our
                Magnus Latitude website. These terms and conditions are subject
                to agreement between us and our users. By following these terms
                you are agreeing to our particulars to use our website/service.
                If you do not agree with it then kindly do not use our services.
              </p>
              <h3>Accuracy of Information:</h3>
              <p>
                The personality test provided by our Service is designed to
                provide general information and insights about your personality
                traits and characteristics. While we strive to provide accurate
                and reliable results, we cannot guarantee the absolute accuracy
                or applicability of the information provided. The results of the
                test should not be considered as professional advice or a
                substitute for consulting with qualified professionals.
              </p>
              <h3>Personal Data:</h3>
              <p>
                In order to generate accurate results, we may collect and
                process certain personal data from you. We are committed to
                protecting your privacy and handling your personal data in
                accordance with applicable laws and our Privacy Policy. By using
                our Service, you consent to the collection, use, and processing
                of your personal data as described in our Privacy Policy.
              </p>
              <h3>Intellectual Property:</h3>
              <p>
                All intellectual property rights, including copyrights and
                trademarks, related to the Service, its content, and the
                personality test are owned by us or our licensors. You agree not
                to reproduce, modify, distribute, or create derivative works
                based on the Service or its content without our prior written
                consent.
              </p>
              <h3>User Conduct:</h3>
              <p>
                You agree to obey all applicable laws and regulations when using
                our service. You shall not use the Service in any way that may
                harm, disrupt, or interfere with the proper functioning of the
                Service or infringe upon the rights of others. You are solely
                responsible for any content you submit or provide through the
                Service.
              </p>
              <h3>Disclaimer of Warranties:</h3>
              <p>
                We disclaim all warranties, including but not limited to, the
                accuracy, completeness, reliability, or suitability of the
                Service for any particular purpose. You also agree that the use
                of service is at your own risk.
              </p>
              <h3>Limitation of Liability:</h3>
              <p>
                In no event shall we be liable for any indirect, incidental,
                consequential, or punitive damages arising out of or in
                connection with your use of the Service. Our total liability for
                any claims arising under this Agreement shall not exceed the
                amount paid by you, if any, for accessing the Service.
              </p>
              <h3>Modifications to the Service or Agreement:</h3>
              <p>
                We reserve the right to modify, suspend, or discontinue the
                Service, or any part thereof, at any time without prior notice.
                Therefore, our users must revise our terms and conditions from
                time to time. The continued use of our service will be directly
                proportional to our changes.
              </p>
              <h3>Governing Law:</h3>
              <p>
                This agreement shall be governed by and render accordance with
                the laws of Jurisdiction. If any dispute arises out of or
                related to this agreement then it will be subject to the
                exclusive jurisdiction of the court located.
              </p>
              <h3>Entire Agreement:</h3>
              <p>
                This Agreement constitutes the entire agreement between you and
                us regarding the subject matter herein and supersedes all prior
                or contemporaneous communications and proposals, whether oral or
                written, between you and us.
                <br />
                <br />
                By understanding our terms and conditions, you agree to bound
                with them and follow them. You must discontinue using our
                service if you do not agree with our terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terms;
