import Link from "next/link";
import Image from "next/image";

// local images
import FOOTER_LOGO from "../assets/images/Flogo.svg";

export default function Footer() {
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
                  <li>
                    <Link href="/"> IELET</Link>
                  </li>
                  <li>
                    <Link href="/"> PTE</Link>
                  </li>
                  <li>
                    <Link href="/"> TOEFL</Link>
                  </li>
                  <li>
                    <Link href="/"> PR</Link>
                  </li>
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
