import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Banner from "../../components/banner";
import PlacehoderImage from "../../assets/images/testplaceholder.png";

import {
  PaymentAPI,
  getTetsListDetail,
  PaymentPayGAPI,
  getTetsLists,
  ApplyCouponCodeAPI,
} from "../../../apiServices/services";
import { useRouter } from "next/router";
import ImgNotFound from "../../assets/images/ImgNotFound.svg";
import { useDispatch, useSelector } from "react-redux";

import useRazorpay from "react-razorpay";
import ModalRegister from "../../components/ModalRegister";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

// export async function generateStaticParams() {
//   const posts = await getTetsLists();
//   return posts.map((post) => ({
//     id: post.slug,
//   }));
// }

// This function gets called at build time
// export async function getStaticPaths() {
//   return {
//     // Only `/posts/1` and `/posts/2` are generated at build time
//     paths: [{ params: { id: "ideal-career-3" } }],
//     // Enable statically generating additional pages
//     // For example: `/posts/3`
//     fallback: true,
//   };
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await getTetsListDetail(params.id);
//   console.log("res test-details", params.id, res);
//   // Pass post data to the page via props
//   return {
//     props: { res },
//     // Re-generate the post at most once per second
//     // if a request comes in
//     revalidate: 1,
//   };
// }

// export async function getStaticPaths() {
//   // When this is true (in preview environments) don't
//   // prerender any static pages
//   // (faster builds, but slower initial page load)
//   if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//     return {
//       paths: [],
//       fallback: "blocking",
//     };
//   }

//   // Call an external API endpoint to get posts
//   const res = await getTetsLists();
//   console.log("res test-details", res);

//   // Get the paths we want to prerender based on posts
//   // In production environments, prerender all pages
//   // (slower builds, but faster initial page load)
//   const paths = res.data.map((post) => ({
//     params: { id: post.slug },
//   }));

//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false };
// }

const TestDetails = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paygUrl, setPaygUrl] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [couponCode, setcouponCode] = useState("");
  const [isCLoading, setIsCLoading] = useState(false);
  const [isValid, setIsValid] = useState("");
  const [error, setError] = useState(false);
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

  const handleValidateCoupon = async (event) => {
    try {
      const { value } = event.target;
      setcouponCode(value);
      if (value.trim().length == 5) {
        setIsCLoading(true);
        const couponRes = await ApplyCouponCodeAPI({ coupon_code: value });
        setIsCLoading(false);
        setIsValid(couponRes.message);
        if (couponRes.status != 200) {
          setError(true);
        } else {
          setError(false);
        }
      }
    } catch (err) {
      setIsCLoading(false);
    }
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

  const handlePayNow = async () => {
    setIsLoading(true);
    try {
      let paygUrl = await PaymentPayGAPI({
        test_id: testListDetails.data.id,
        coupon_code: couponCode,
      });
      if (paygUrl.status == 200) {
        localStorage.setItem("PaygData", JSON.stringify(paygUrl));
        window.location.assign(paygUrl?.data.payment_url);
      } else {
        setIsLoading(false);
        toast.error(paygUrl.message);
      }
    } catch (ee) {
      setIsLoading(false);
      console.error(ee.data);
    }
  };

  const testFees = testListDetails.data?.test_price;
  const testFeestruncatedNumber = Math.trunc(testFees);

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
                <div
                  className="test-banner"
                  style={{
                    backgroundImage: testListDetails.data?.test_banner
                      ? `url(${testListDetails.data?.test_banner})`
                      : `url(${PlacehoderImage.src})`,
                  }}
                >
                  {/* <Image src={PlacehoderImage} alt="" /> */}
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
                <div
                  style={{
                    marginBottom: "10px",
                    color: "#0a6eb0",
                    fontWeight: "bold",
                  }}
                >
                  Buy Now For
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#b35b0f",
                    }}
                  >
                    {" "}
                    5000
                  </span>{" "}
                  {/* {testListDetails.data?.test_price} Rs */}
                  {testFeestruncatedNumber} Rs
                </div>

                <div>
                  <input
                    type="text"
                    value={couponCode}
                    placeholder="Enter Coupon Code"
                    className="coupon-code"
                    maxLength={5}
                    onChange={handleValidateCoupon}
                  />
                  {isCLoading ? (
                    <ThreeDots height="24" width="67" color="#ea8127" />
                  ) : (
                    <div className={error ? "coupon-error" : "coupon-success"}>
                      {isValid}
                    </div>
                  )}
                </div>
                {
                  !auth?.data ? (
                    <div className="btn-block">
                      <button
                        className="btn btn-orange-color border-0"
                        onClick={() => setIsModal((current) => !current)}
                      >
                        Buy Now
                      </button>
                    </div>
                  ) : (
                    /**
                     *! Commented Buy Test button code uncomment one payment methode integrated
                     **/

                    <button
                      className="btn btn-orange-color"
                      style={{ marginTop: 15 }}
                      onClick={handlePayNow}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <ThreeDots height="24" width="67" color="#FFF" />
                      ) : (
                        "Buy Now"
                      )}
                    </button>
                  )
                  // null
                }
              </div>
              <div>
                <ModalRegister isModal={isModal} setIsModal={setIsModal} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default TestDetails;

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params?.slug || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getTetsLists();
  return {
    paths: allPosts?.data?.map((post) => `/test-detail/${post.slug}`) || [],
    fallback: true,
  };
}
