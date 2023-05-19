import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Banner from "../../components/banner";
import PlacehoderImage from "../../assets/images/testplaceholder.png";
import ICtime from "../../assets/images/ICtime.svg";
import ICquestion from "../../assets/images/ICquestion.svg";

import { getTetsListDetail } from "../../../apiServices/services";
import { useRouter } from "next/router";
import ImgNotFound from "../../assets/images/ImgNotFound.svg";
import { useSelector } from "react-redux";
import ModalLogin from "../../components/ModalLogin";
import useRazorpay from "react-razorpay";

const TestDetails = () => {
  const [isModal, setIsModal] = useState(false);
  const auth = useSelector((state) => state.auth.user);
  const router = useRouter();
  const { id } = router.query;

  // const getTestDetails = async () => {
  //   const ListDetails = await getTetsListDetail(id);
  //   console.log("ListDetails________ : ", ListDetails);
  // };
  const [testListDetails, setTestListDetails] = useState([]);
  const modalClose = (event) => {
    setIsModal(false);
    // console.log(isModalForgot, "modal");
  };
  useEffect(() => {
    (async () => {
      try {
        let testDetailsData = await getTetsListDetail(id);
        setTestListDetails(testDetailsData);

        // console.log("testDetailsData==========:", testDetailsData);
      } catch (ee) {
        console.error(ee.data);
      }
    })();
    if (auth == 200) {
      modalClose();
    }
  }, [id]);

  // const Razorpay = useRazorpay();
  // const handlePayment = useCallback(async () => {
  //   // const order = await createOrder(params);

  //   const options = {
  //     key: "rzp_test_xK1MoOvDIdPJiX",
  //     amount: "3000",
  //     handler: (res) => {
  //       console.log(res);
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };

  //   const rzpay = new Razorpay(options);

  //   // rzpay.on("payment.failed", function (response) {
  //   //   alert(response.error.code);
  //   //   alert(response.error.description);
  //   //   alert(response.error.source);
  //   //   alert(response.error.step);
  //   //   alert(response.error.reason);
  //   //   alert(response.error.metadata.order_id);
  //   //   alert(response.error.metadata.payment_id);
  //   // });
  //   rzpay.open();
  // }, [Razorpay]);
  return (
    <div>
      {testListDetails?.status === 400 || testListDetails?.status === 404 ? (
        <div className="container">
          <div className="page-not-found">
            <Image src={ImgNotFound} alt="" />
            <h3>Page not Found</h3>
            <Link href="/" className="btn-orange-color mt-3">
              Go Back To Home
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Banner title={testListDetails.data?.title} isButton={true} />
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
                    <p>{testListDetails.data?.test_time} minuets</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span>
                      <Image src={ICquestion} alt="" />
                    </span>
                    <p>{testListDetails.data?.question_count} Questions</p>
                  </div>
                </div>

                <span
                  dangerouslySetInnerHTML={{
                    __html: testListDetails.data?.description,
                  }}
                ></span>
                {/* <Link className="btn btn-orange-color" href="/">
                  Buy Test
                </Link> */}

                {!auth?.data ? (
                  <div className="btn-block">
                    <button
                      className="btn btn-orange-color border-0"
                      onClick={() => setIsModal((current) => !current)}
                    >
                      Log in
                    </button>
                  </div>
                ) : (
                  // <button
                  //   className="btn btn-orange-color"
                  //   onClick={handlePayment}
                  // >
                  //   Buy Test
                  // </button>
                  <Link className="btn btn-orange-color" href="/">
                    Buy Test
                  </Link>
                )}
              </div>
              <div>
                <ModalLogin isModal={isModal} setIsModal={setIsModal} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default TestDetails;
