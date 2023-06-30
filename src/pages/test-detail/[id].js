import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Banner from "../../components/banner";
import PlacehoderImage from "../../assets/images/testplaceholder.png";
import ICtime from "../../assets/images/ICtime.svg";
import ICquestion from "../../assets/images/ICquestion.svg";

import { PaymentAPI, getTetsListDetail } from "../../../apiServices/services";
import { useRouter } from "next/router";
import ImgNotFound from "../../assets/images/ImgNotFound.svg";
import { useDispatch, useSelector } from "react-redux";
import ModalLogin from "../../components/ModalLogin";
import ModalSuccess from "../../components/ModalSuccess";
import useRazorpay from "react-razorpay";
import ModalRegister from "../../components/ModalRegister";

const TestDetails = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
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
        // console.log("testDetailsData==========:", testListDetails.data.id);
      } catch (ee) {
        console.error(ee.data);
      }
    })();
  }, [id]);
  useEffect(() => {
    // console.log(auth);
    if (auth?.status == 200) {
      modalClose();
    }
  }, [auth]);

  const Razorpay = useRazorpay();
  const handlePayment = useCallback(async () => {
    // const order = await createOrder(params);

    const options = {
      // key: "rzp_test_xK1MoOvDIdPJiX", // test Key
      key: "rzp_live_LUSwPzW9PsEcdw", // Live Key
      // amount: "3000",
      amount: testListDetails.data.test_price * 100,
      handler: async (res) => {
        // console.log(res.razorpay_payment_id, testListDetails);
        try {
          setLoading(true);
          setIsModalSuccess(true);
          let payment_result = await PaymentAPI({
            // amount: testListDetails.data.test_price,
            currency: "INR",
            razor_pay_id: res.razorpay_payment_id,
            test_id: testListDetails.data.id,
          });
          // console.log(payment_result);
          if (payment_result?.data?.status === "captured") {
            // alert("Success");
            setLoading(false);
          }
          setInterval(() => {
            setIsModalSuccess(false);
          }, 1000 * 4);
        } catch (err) {
          setIsModalSuccess(false);
          // console.log(err);
        }
      },
      theme: {
        color: "#ea8127",
      },
    };

    const rzpay = new Razorpay(options);

    // rzpay.on("payment.failed", function (response) {
    //   alert(response.error.code);
    //   alert(response.error.description);
    //   alert(response.error.source);
    //   alert(response.error.step);
    //   alert(response.error.reason);
    //   alert(response.error.metadata.order_id);
    //   alert(response.error.metadata.payment_id);
    // });
    rzpay.open();
  }, [Razorpay, testListDetails]);
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
          <Banner title={testListDetails.data?.title} />

          <div className="test-details">
            <div className="container">
              <div className="col-md-8 col-12 mx-auto mb-5">
                <div className="test-banner">
                  <Image src={PlacehoderImage} alt="" />
                </div>
                {/* <h2>About Assessment</h2>
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
                </div> */}

                <span
                  dangerouslySetInnerHTML={{
                    __html: testListDetails.data?.description,
                  }}
                ></span>
                {/* <Link className="btn btn-orange-color" href="/">
                Buy Test
              </Link> */}

                {
                  !auth?.data ? (
                    <div className="btn-block">
                      <button
                        className="btn btn-orange-color border-0"
                        onClick={() => setIsModal((current) => !current)}
                      >
                        Buy Test
                      </button>
                    </div>
                  ) : (
                    /**
                     *! Commented Buy Test button code uncomment one payment methode integrated
                     **/

                    <button
                      className="btn btn-orange-color"
                      onClick={handlePayment}
                    >
                      Buy Test
                    </button>
                  )
                  // null
                }
              </div>
              <div>
                <ModalRegister isModal={isModal} setIsModal={setIsModal} />
              </div>
              <div>
                <ModalSuccess
                  loading={loading}
                  isModal={isModalSuccess}
                  setIsModal={setIsModalSuccess}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default TestDetails;
