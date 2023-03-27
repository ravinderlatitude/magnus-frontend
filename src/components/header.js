import Image from "next/image";
import Link from "next/link";

import LOGO from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="header-main fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container c-container">
          <Link href="/" className="navbar-brand">
            <Image src={LOGO} />
          </Link>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/aboutus" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/" className="nav-link dropdown-toggle">
                  Self Assessment
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/" className="dropdown-item">
                      Learning Style
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="dropdown-item">
                      Stream Selector
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="dropdown-item">
                      Ideal Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="dropdown-item">
                      Personality
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="dropdown-item">
                      Multiple Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="dropdown-item">
                      Engineering Branch
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="dropdown-item">
                      Humanities Branch
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="dropdown-item">
                      Commerce Branch
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Faq
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn-block">
            <button className="btn btn-orange ms-3">Login </button>
            <button className="btn btn-blue ms-3">Register </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
