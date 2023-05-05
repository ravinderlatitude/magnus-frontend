import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

// local images
import FOOTER_LOGO from "../assets/images/Flogo.svg";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
              vel tempor dolor augue et lectus.
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
                    <Link href="/"> Terms and Conditons</Link>
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
              <div className="col-auto">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <Link href="/"> manglat@domain.com</Link>
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
