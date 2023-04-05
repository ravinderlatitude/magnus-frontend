import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ActiveLink from "./ActiveLink";
import useOutsideClick from "../hooks/useOutsideClick";

import LOGO from "../assets/images/logo.svg";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
export default function Header({ href, children }) {
  const dropdown = useRef(null);

  // menu toggle page for menu
  const [isActive, setIsActive] = useState(false);
  useOutsideClick(dropdown, () => setIsActive(false));
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const [isSubmenu, setIsSubmenu] = useState(false);
  const handleClickSubMenu = (event) => {
    setIsSubmenu((current) => !current);
  };
  // for Modal
  // const handelModal = useRef(null);

  const [isModal, setIsModal] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  // useOutsideClick(handelModal, () => setIsModal(false));
  // const modalClick = (event) => {
  //   setIsModal((current) => !current);
  // };

  return (
    <div className="header-main fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container c-container" ref={dropdown}>
          <ActiveLink href="/" className="navbar-brand">
            <Image alt="" src={LOGO} />
          </ActiveLink>
          <button className="navbar-toggler" onClick={handleClick}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={
              "navbar-collapse " + (!isActive ? "collapse" : "collapsed")
            }
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <ActiveLink href="/" onClick={handleClick}>
                  Home
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink href="/aboutus" onClick={handleClick}>
                  About us
                </ActiveLink>
              </li>
              <li
                className={"nav-item dropdown " + (isSubmenu ? "active" : "")}
                onMouseLeave={() => setIsSubmenu(false)}
              >
                <span
                  className="nav-link dropdown-toggle"
                  onClick={handleClickSubMenu}
                  onMouseOver={() => setIsSubmenu(true)}
                >
                  Self Assessment
                </span>
                <ul className="dropdown-menu ">
                  <li>
                    <ActiveLink href="/course-detail" className="dropdown-item">
                      Learning Style
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/" className="dropdown-item">
                      Stream Selector
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/" className="dropdown-item">
                      Ideal Career
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/" className="dropdown-item">
                      Personality
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/" className="dropdown-item">
                      Multiple Intelligence
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/" className="dropdown-item">
                      Engineering Branch
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/" className="dropdown-item">
                      Humanities Branch
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/" className="dropdown-item">
                      Commerce Branch
                    </ActiveLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <ActiveLink href="/" className="nav-link">
                  Faq
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink href="/" className="nav-link">
                  Contact
                </ActiveLink>
              </li>
            </ul>
          </div>
          <div className="btn-block">
            <button
              className="btn btn-orange ms-3"
              onClick={() => setIsModal((current) => !current)}
            >
              Login
            </button>
            <button
              className="btn btn-blue ms-3"
              onClick={() => setIsModalRegister((current) => !current)}
            >
              Register{" "}
            </button>
            <div>
              <ModalLogin isModal={isModal} setIsModal={setIsModal} />
            </div>
            <div>
              <ModalRegister
                isModal={isModalRegister}
                setIsModal={setIsModalRegister}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
